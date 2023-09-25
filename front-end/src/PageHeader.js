import { ReactComponent as GithubLogo } from './svg/github-mark-white.svg'


function PageHeader() {
    return (
        <header className="page_header">
        <div className="header_content header_content__page_header">
          <a href="https://github.com/SpectreSpect/nlp-natural-disaster" className="github_logo">
            <GithubLogo width="32" height="32" viewBox="0 0 100 100"
                  fill="none"/>
          </a>
          <div className="header_slash header_slash__header_content">/</div>
          <a href="https://github.com/SpectreSpect/nlp-natural-disaster" 
            className="project_name project_name__header_content">NLP natural disaster</a>
        </div>
      </header>
    );
}

export default PageHeader;
