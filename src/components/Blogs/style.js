import { styled } from "styled-components";

export const BlogWrapper = styled.div`
  width: 100%;
  .container {
    max-width: 1140px;
    margin: 0 auto;
    padding: 0 15px;
    .blogs {
      width: 83.333333%;
      margin: 0 auto;
      h2 {
        font-weight: 700;
        padding-top: 30px;
        margin-bottom: 30px;
        font-size: 2.5em;
      }
      .card-plain {
        display: flex;
        margin-bottom: 60px;
        img {
          width: 365px;
          height: 244px;
          box-shadow: 0 10px 25px 0 rgba(0, 0, 0, 0.3);
          border-radius: 0.1875rem;
          margin-right: 15px;
        }
        .enterprise {
          margin-left: 15px;
          padding-right: 15px;
          h6 {
            margin-top: 1rem;
            margin-bottom: 0;
            color: #2ca8ff;
          }
          .card-title:hover {
            text-decoration: underline !important;
          }
          .card-title {
            margin-top: 15px;
            line-height: 1.25em;
            font-size: 25px;
            font-weight: 400;
            color: #444;
            margin-bottom: 0;
            cursor: pointer;
          }
          .red-more {
            color: #9a9a9a;
            font-weight: 300;
            line-height: 1.61em;
            font-size: 1.2em;
            cursor: pointer;
          }
          .red-more:hover {
            text-decoration: underline !important;
          }
          .card-description {
            color: #9a9a9a;
            font-weight: 300;
            line-height: 1.61em;
            font-size: 1.2em;
            margin-bottom: 0;
          }
          .author {
            color: #9a9a9a;
            font-weight: 300;
            line-height: 1.61em;
            font-size: 1.2em;
            margin-bottom: 0;
            margin-top: 0.2rem;
            span {
              color: #444;
              cursor: pointer;
            }
            span:hover {
              text-decoration: underline !important;
            }
          }
        }
      }
    }
  }
`;

export const LatestBlog2Wrapper = styled.div`
  max-width: 950px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  .title {
    width: 950px;
    font-weight: 700;
    padding-top: 30px;
    margin-bottom: 30px;
    font-size: 2.5em;
  }
  .row {
    display: flex;
    flex-direction: row;
  }
`;
export const BlogItemPostWrapper = styled.div`
  margin: 10px 15px;
  width: 366px;
  img {
    width: 366px;
    height: auto;
    box-shadow: 0 10px 25px 0 rgba(0, 0, 0, 0.3);
    border-radius: 0.1825rem;
  }
  h6 {
    color: #2ca8ff;
    margin-top: 1rem;
  }
  h5 {
    text-decoration: none;
    border-bottom: 2px solid transparent;
    color: #444;
    cursor: pointer;
    font-size: 1.3em;
    font-weight: 400;
    margin: 5px 0;
  }
  h5:hover {
    text-decoration: underline !important;
  }
  p {
    color: #9a9a9a;
    font-weight: 300;
    margin-top: 0;
    font-size: 1rem;
  }
  .red-more {
    color: #9a9a9a;
    font-weight: 300;
    line-height: 1.61em;
    font-size: 1.1em;
    cursor: pointer;
  }
  .red-more:hover {
    text-decoration: underline !important;
  }
`;
