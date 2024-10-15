import styled from "styled-components";

const App = () => {
  return (
    <MainContainer>
      <TopContainer>
        <div>
          <img src="logo.svg" alt="logo" />
        </div>
      </TopContainer>
    </MainContainer>
  );
};

export default App;

const MainContainer = styled.div``;
const TopContainer = styled.div`;`;
