import pandas as pd
import tensorflow as tf
from keras.preprocessing.text import Tokenizer
from keras.utils import to_categorical
from matplotlib import pyplot as plt
import numpy as np
import pickle


embedding_output_dim = 100
latent_dim = 50

train = pd.read_csv("data/train.csv")

texts = train['text']
targets_num_classes = train['target'].nunique()
targets = to_categorical(train['target'], num_classes=targets_num_classes)

max_words_count = 3000
tokenizer = Tokenizer(num_words=max_words_count, filters='!–"—#$%&amp;()*+,-./:;<=>?@[\\]^_`{|}~\t\n\r«»',
                      lower=True, split=' ', char_level=False)
tokenizer.fit_on_texts(texts)

with open('tokenizer/tokenizer.pickle', 'wb') as handle:
    pickle.dump(tokenizer, handle, protocol=pickle.HIGHEST_PROTOCOL)

sequences = tokenizer.texts_to_sequences(texts)

max_seq_len = max([len(s) for s in sequences])
sequences = tf.constant([s + [0] * (max_seq_len - len(s)) for s in sequences])

encoder_inputs = tf.keras.layers.Input(shape=1)
encoder_embedding_outputs = tf.keras.layers.Embedding(input_dim=max_words_count, output_dim=embedding_output_dim,
                                                      input_shape=(None,))(encoder_inputs)
encoder_lstm_outputs_1 = tf.keras.layers.LSTM(latent_dim, return_sequences=True)(encoder_embedding_outputs)
encoder_lstm_outputs_2 = tf.keras.layers.LSTM(latent_dim)(encoder_lstm_outputs_1)
encoder_outputs = tf.keras.layers.Dense(targets_num_classes, activation='softmax')(encoder_lstm_outputs_2)

model = tf.keras.Model(encoder_inputs, encoder_outputs)
model.compile(optimizer="adam", loss="categorical_crossentropy", metrics=["accuracy"])

checkpoint_filepath = './tmp/checkpoint'
model_checkpoint_callback = tf.keras.callbacks.ModelCheckpoint(
    filepath=checkpoint_filepath,
    save_weights_only=True,
    monitor='val_accuracy',
    mode='max',
    save_best_only=True)

history = model.fit(sequences, targets, callbacks=[model_checkpoint_callback],
                    batch_size=32, epochs=10, validation_split=0.2).history

model.load_weights(checkpoint_filepath)
model.save('models/1')

plt.plot(history['accuracy'], label='accuracy')
plt.plot(history['val_accuracy'], label='validation accuracy')
plt.title('model accuracy')
plt.xlabel('epochs')
plt.ylabel('accuracy')
plt.legend()
plt.show()
