import { Paper, Tabs } from '@material-ui/core'
import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import AboutMeScreen from 'screens/AboutMeScreen/AboutMeScreen'
import HomeScreen from 'screens/HomeScreen/HomeScreen'
import PortfolioScreen from 'screens/PortfolioScreen/PortfolioScreen'
import LinkTab from '../../components/LinkTab'
import './App.scss'

function App () {
  return (
    <BrowserRouter>
      <Paper className='page'>
        <Tabs className='navBar'>
          <LinkTab label='Home' href='/' />
          <LinkTab label='Resume' href='/resume' />
          <LinkTab label='Portfolio' href='/portfolio' />
        </Tabs>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path='/resume'>
            <AboutMeScreen />
          </Route>
          <Route path='/portfolio'>
            <PortfolioScreen />
          </Route>
          <Route path='/'>
            <HomeScreen />
          </Route>
        </Switch>
      </Paper>
    </BrowserRouter>
  )
}

export default App
