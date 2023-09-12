import styled from "styled-components";
import ReactPlayer from "react-player";

/* Component ---------------------------*/
import Inset from "@/Common/PagesLayout/Inset";
import Slideshow from "./Slideshow/Slideshow";
import Tabbed from "./Tabbed/Tabbed";

const Home = () => {
    return (
        <HomeStyled className="Home">
            <h1>Home</h1>
            <Slideshow />
            <Inset>
                <Tabbed />
                <ReactPlayer
                    url="https://www.youtube.com/watch?v=ZHlUl8DhaTg"
                    width="100%"
                />
            </Inset>
        </HomeStyled>
    );
};

export default Home;

const HomeStyled = styled.div`
    h1 {
        display: none;
    }
    .Tabbed {
        margin-bottom: 50px;
    }
`;
