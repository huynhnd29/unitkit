import { styled } from "styled-components";

export const OurAwesomeTeamWrapper = styled.div`
  max-width: 1144px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  .title {
    text-align: center;
    font-weight: 700;
    padding-top: 30px;

    font-weight: 700;
    font-size: 2.5em;
  }
  .description {
    color: #9a9a9a;
    font-weight: 300;
    font-size: 1.5em;
    line-height: 1.45em;
    margin-top: 30px;
    margin-bottom: 15px;
    text-align: center;
    max-width: 700px;
    margin: 0 auto;
  }
  .row {
    display: flex;
    margin: 40px 10pxpx;
  }
`;

export const WrapperItemOurAwesomeTeam1 = styled.div`
  width: 340px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 40px 15px;
  img {
    width: 130px;
    height: 130px;
    border-radius: 65px;
    box-shadow: 0 10px 25px 0 rgba(0, 0, 0, 0.3);
  }
  h3 {
    font-weight: 400;
    font-size: 1.825em;
    margin-bottom: 0.75rem;
    margin-top: 5px;
  }
  h6 {
    text-transform: capitalize;
    font-weight: 700;
    color: #2ca8ff !important;
    margin-bottom: 0.5rem;
    margin-top: 0;
    font-size: 0.8rem;
  }
  p {
    color: #9a9a9a;
    font-weight: 300;
    line-height: 1.61em;
    margin-top: 0;
    margin-bottom: 1rem;
    font-size: 1.2em;
    text-align: center;
  }
`;

export const OurAwesomeTeam2Wrapper = styled(OurAwesomeTeamWrapper)`
  .mtop-20 {
    margin-top: 40px;
  }
`;

export const OurAwesomeTeam2ItemWrapper = styled.div`
  margin: 50px 20px;
  img {
    width: 350px;
    height: 234px;
    border-radius: 0.1875rem;
    box-shadow: 0 10px 25px 0 rgba(0, 0, 0, 0.3);
  }
  h4 {
    margin: 10px 0 0;
    font-size: 1.5em;
    font-weight: 400;
    text-align: center;
  }
  h6 {
    text-transform: capitalize;
    font-weight: 700;
    color: #9a9a9a;
    margin-top: 5px;
    text-align: center;
  }
`;
