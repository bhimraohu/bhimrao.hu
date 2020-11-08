import React from "react"
import styled from 'styled-components';

import { DesignSettings } from "../../utils/constants";
import TitleOnly from "../common/TitleOnly";
// import Card from '../common/Card';

const TeamPageWrapper = styled.section`
  margin: 3rem auto;
  width: ${DesignSettings.outerWidth};
`;

const MemberRows = styled.section`
  margin: 0 auto;
  width: ${DesignSettings.innerWidth};
  display: flex;
  flex-direction: row;
  flex: 0 0 30%;
  flex-wrap: wrap;
  justify-content: space-between;

  .card-container {
    width: 30%;
    margin: 3rem 0;
  }
`;

const TeamPage = ({ data }) => {

  const placeholders = 3 - (data.team_members.length % 3);
  // add extra
  for (let i = 0; i < placeholders; i++) {
    data.team_members.push({
      placeholder: true,
    });
  }

  return (
    <TeamPageWrapper>
      <TitleOnly title={data.title} />
      <MemberRows>
        <h1>Fejlesztés alatt</h1>
        {/* {
          data.team_members.map((member, idx) => {
            member.title = member.name;
            member.button_label = 'Tovább';
            return (
              member.placeholder
                ? <div className="card-container"></div>
                : <div className="card-container">
                  <Card key={idx} news={member} width={'initial'} height={'100%'} />
                </div>
            )
          })
        } */}
      </MemberRows>
    </TeamPageWrapper>
  );
}

export default TeamPage;