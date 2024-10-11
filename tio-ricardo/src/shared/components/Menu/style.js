import styled from "styled-components";

const ContainerMenu = styled.header`
  background-color: #fff;
  position: fixed;
  width: 100%;
  z-index: 1000;
  .content-menu {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.4em 1rem;
    .logo {
      a{
        display: flex;
        align-items: center;
        img{
          width: 20%;
        }
      }
    }
    .button-responsive {
      display: block;
      button {
        background-color: transparent;
        border: none;
        height: 40px;
        outline: none;
        width: 40px;
        &:before,
        &:after,
        div {
          background: orange;
          content: "";
          display: block;
          height: 6px;
          border-radius: 3px;
          margin: 7px auto;
          transition: 0.5s;
          width: 35px;
        }
        &:hover {
          &:after {
            transform: translateY(-12px) rotate(-135deg);
          }
          &:before {
            transform: translateY(12px) rotate(135deg);
          }
          div {
            transform: scale(0);
          }
        }
      }
    }
    .container-links {
      display: none;
      &.show {
        display: block;
      }
      .links {
        display: flex;
        flex-direction: column;
        gap: 2rem;
        li {
          a {
            color: #333;
          }
        }
      }
    }
  }
  @media (min-width: 768px) {
    .content-menu {
      .logo {
        a{
          img{
            width: 25%;
          }
        }
      }
      .button-responsive {
        display: none;
      }
      .container-links {
        display: inline-flex;
        .links {
          flex-direction: row;
          gap: 2rem;
          li {
            a {
              font-size: 0.92rem;
              font-weight: 600;
            }
          }
        }
      }
    }
  }
  @media (max-width: 600px) {
    .content-menu {
      .container-links {
        background-color: #fff;
        position: absolute;
        top: 4em;
        left: 0;
        width: 100%;
        .links {
          li {
            padding: 0.5em 1em;
            a {
              font-size: 1.4em;
              font-weight: 600;
            }
          }
        }
      }
    }
  }
`;

export { ContainerMenu };
