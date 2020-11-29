import { ThemeProvider } from "styled-components";
import { Sidebar } from "../Sidebar";
import { useTheme } from "styled-components";
import { Button } from "../Button";
import styled from "styled-components";





export const Layout = (props) => {
    const layoutSidebar = props;
    return (
        <Sidebar variation="right" >
            <Button type="oulined" variation="secondary" size="normal"></Button>
            <Button type="oulined" variation="secondary" size="normal"></Button>
            <Button type="oulined" variation="secondary" size="normal"></Button>
        </Sidebar>
    )

}
