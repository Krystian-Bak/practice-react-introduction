import React from 'react';
import { createRoot } from 'react-dom/client';



const root = createRoot(document.querySelector('#root'));

const MenuItemStyle = {
    margin: '1rem 0rem',
    border: '2px solid lightgray',
    backgroundColor: 'gray',
    padding: '1rem',
    borderRadius: '8px',
    color: 'lightgray',
    textAlign: 'center',
    fontFamily: 'monospace',
    fontSize: '1.25rem',
    fontWeight: '700',
    textTransform: 'uppercase',
    listStyle: 'none'   
}

const LinkStyle = {
    minWidth: 'max-content',
    minHeight: 'max-content',
    color: 'lightgray',
    textDecoration: 'none'
};

class MenuItem extends React.Component {
    render(){
        const {text, url} = this.props
        return(
            <li style={MenuItemStyle}>
                    <a href={url} style={LinkStyle}>
                        {text}
                    </a>
                </li>
        )
    }
}

class Menu extends React.Component {
    render(){
        const { itemsMenu } = this.props
        return(
            <ul>
                <MenuItem text={itemsMenu[0].text} url={itemsMenu[0].url} />
                <MenuItem text={itemsMenu[1].text} url={itemsMenu[1].url} />
                <MenuItem text={itemsMenu[2].text} url={itemsMenu[2].url} />
            </ul>
        )
    }
}


class Nav extends React.Component{
    render(){
        const { itemsMenu } = this.props
        return(
            <nav>
                <Menu itemsMenu={itemsMenu} />
            </nav>
        )
    }
}

// map 

class MenuMap extends React.Component {
    render(){
        const { itemsMenu } = this.props
        return(
            <ul>

                { itemsMenu.map((item, index) => (

                <MenuItem key={index} text={item.text} url={item.url} />

                )
                )}

            </ul>
        )
    }
}

class NavMap extends React.Component{
    render(){
        const { itemsMenu } = this.props
        return(
            <nav>
                <MenuMap itemsMenu={itemsMenu} />
            </nav>
        )
    }
}



const App = () => {
     const itemsMenu = [
        { text: 'Home Page', url: '/home-page' },
        { text: 'About us', url: '/about-us' },
        { text: 'Products', url: '/products' }
    ]
    
    return <Nav itemsMenu={itemsMenu} />
}

const AppMap = () => {
     const itemsMenu = [
        { text: 'Home Page', url: '/home-page' },
        { text: 'About us', url: '/about-us' },
        { text: 'Products', url: '/products' }
    ]
    
    return <NavMap itemsMenu={itemsMenu} />
}

// with functions - props zamieniam na destrukturyzacje itemsMenu = item, index

const MenuFuncions = ({itemsMenu}) => ( // tablica na dole :)
    <ul>
        {itemsMenu.map((item, index) => (  // destrukturyzacja 
            <MenuItem key={index} text={item.text} url={item.url} />
        ))}
    </ul>
)

const NavFuncions = ({itemsMenu}) => (
    <nav>
        <MenuFuncions itemsMenu={itemsMenu} />
    </nav>
)

const AppMenuFunction = () => {
    const itemsMenu = [
        { text: 'Home', url: '/' },
        { text: 'About', url: '/about' },
        { text: 'Products', url: '/products' }
    ]
    return <NavFuncions itemsMenu={itemsMenu} />
}

root.render(
<>
<div>jsx without map</div>
<App />
<div>with map</div>
<AppMap />
<div>with function</div>
<AppMenuFunction />
</>
)