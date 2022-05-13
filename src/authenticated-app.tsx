import styled from "@emotion/styled";
import { useAuth } from "Context/auth-context"
import { ProjectListScreen } from "screen/project-list"

export const AuthenticatedApp = () => {
    const {logout} = useAuth();
    return (<Container>
        <Header>
            <HeaderLeft>
                <h3>logo</h3>
                <h3>Project</h3>
                <h3>User</h3>
            </HeaderLeft>
            <HeaderRight>
                <button onClick={logout}>Logout</button>
            </HeaderRight>
        </Header>
        <Nav>nav</Nav>
        <Main>
            <ProjectListScreen />
        </Main>
        <Aside>aside</Aside>
        <Footer>footer</Footer>
    </Container>)
}

const Container = styled.div`
    display: grid;
    grid-template-rows: 6rem calc(100vh-6rem) auto;
    grid-template-columns: 20rem 1fr 20rem;
    grid-template-areas: 
    "header header header"
    "nav main aside"
    "footer footer footer"
    ;
`
const Header = styled.header`
    grid-area: header;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

`

const HeaderLeft = styled.div`
    display: flex;
    align-items: center;
`
const HeaderRight = styled.div`
    
`
const Main = styled.main`
    grid-area: main;
`
const Nav = styled.nav`
    grid-area: nav;
`
const Aside = styled.aside`
    grid-area: aside;
`
const Footer = styled.footer`
    grid-area: footer;
`
