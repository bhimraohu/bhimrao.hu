import React from "react"
import styled from "styled-components"

const TopBarWrapper = styled.div`
  padding: 1rem 0;
  background-color: #1D1D3C;
  
  div {
    margin: 0 auto;
    max-width: 960px;
  }

  ul {
    list-style-type: none;
    display: flex;
    justify-content: flex-end;
    margin: 0;
    align-items: center;

    li {
      padding-left: 10px;
      margin-bottom: 0;
    }

    .search {
      padding-right: 50px;
    }
    
    li:last-child {
      padding-right: 16px;
    }
  }

  
`;

const Search = styled.input`
`;

const Button = styled.div`
  padding: 10px 0 10px 36px;
  color: white;
  background-color: transparent;
  border: none;

  &:hover {
    color: red;
    cursor: pointer;
  }
`;

const HeaderTopBar = ({ topbarsData }) => {
  return (
    <TopBarWrapper>
      <div>
        <ul>
          <li className="search">
            <Search type="text" placeholder={topbarsData.search_placeholder} />
          </li>
          {
            topbarsData.social_links.map((link, idx) => (
              <li key={idx}>
                <a href={link.link.url} title={link.tooltip} alt={link.alt_text} target="_blank" rel="noreferrer">X</a>
              </li>
            ))
          }
          <li className="language">
            <Button>{topbarsData.language_main}</Button>
          </li>
          <li>
            <Button>{topbarsData.language_second}</Button>
          </li>
        </ul>
      </div>
    </TopBarWrapper>
  )
}

export default HeaderTopBar
