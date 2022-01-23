/* eslint-disable max-classes-per-file */
/* eslint-disable react/no-multi-comp */

import { createMedia } from "@artsy/fresnel"
import PropTypes from "prop-types"
import React, { Component } from "react"
import {
  Button,
  Card,
  Container,
  Divider,
  Grid,
  Header,
  Icon,
  Image,
  List,
  Menu,
  Segment,
  Sidebar,
  Visibility,
} from "semantic-ui-react"

const { MediaContextProvider, Media } = createMedia({
  breakpoints: {
    mobile: 0,
    tablet: 768,
    computer: 1024,
  },
})

/* Heads up!
 * HomepageHeading uses inline styling, however it's not the best practice. Use CSS or styled
 * components for such things.
 */
const HomepageHeading = ({ mobile }) => (
  <Container text>
    <Header
      as="h1"
      content="Hello! I'm Alex Barbati"
      inverted
      style={{
        fontSize: mobile ? "2em" : "4em",
        fontWeight: "normal",
        marginBottom: 0,
        marginTop: mobile ? "1.5em" : "3em",
      }}
    />
    <Header
      as="h2"
      content="An accomplished software engineer"
      inverted
      style={{
        fontSize: mobile ? "1.5em" : "1.7em",
        fontWeight: "normal",
        marginTop: mobile ? "0.5em" : "1.5em",
        marginBottom: mobile ? "0.5em" : "1em",
      }}
    />
    <Button size="huge" color="green">
      Learn More
      <Icon name="right arrow" />
    </Button>
  </Container>
)

HomepageHeading.propTypes = {
  mobile: PropTypes.bool,
}

/* Heads up!
 * Neither Semantic UI nor Semantic UI React offer a responsive navbar, however, it can be implemented easily.
 * It can be more complicated, but you can create really flexible markup.
 */
class DesktopContainer extends Component {
  state = {}

  hideFixedMenu = () => this.setState({ fixed: false })
  showFixedMenu = () => this.setState({ fixed: true })

  render() {
    const { children } = this.props
    const { fixed } = this.state

    return (
      <Media greaterThan="mobile">
        <Visibility
          once={false}
          onBottomPassed={this.showFixedMenu}
          onBottomPassedReverse={this.hideFixedMenu}
        >
          <Segment
            inverted
            textAlign="center"
            style={{ minHeight: 700, padding: "1em 0em" }}
            vertical
          >
            <Menu
              fixed={fixed ? "top" : null}
              inverted={!fixed}
              pointing={!fixed}
              secondary={!fixed}
              size="large"
            >
              <Container>
                <Menu.Item as="a" active>
                  Home
                </Menu.Item>
                <Menu.Item as="a">Work</Menu.Item>
                <Menu.Item as="a">Company</Menu.Item>
                <Menu.Item as="a">Careers</Menu.Item>
              </Container>
            </Menu>
            <HomepageHeading />
          </Segment>
        </Visibility>

        {children}
      </Media>
    )
  }
}

DesktopContainer.propTypes = {
  children: PropTypes.node,
}

class MobileContainer extends Component {
  state = {}

  handleSidebarHide = () => this.setState({ sidebarOpened: false })

  handleToggle = () => this.setState({ sidebarOpened: true })

  render() {
    const { children } = this.props
    const { sidebarOpened } = this.state

    return (
      <Media as={Sidebar.Pushable} at="mobile">
        <Sidebar.Pushable>
          <Sidebar
            as={Menu}
            animation="overlay"
            inverted
            onHide={this.handleSidebarHide}
            vertical
            visible={sidebarOpened}
          >
            <Menu.Item as="a" active>
              Home
            </Menu.Item>
            <Menu.Item as="a">Work</Menu.Item>
            <Menu.Item as="a">Company</Menu.Item>
            <Menu.Item as="a">Careers</Menu.Item>
            <Menu.Item as="a">Log in</Menu.Item>
            <Menu.Item as="a">Sign Up</Menu.Item>
          </Sidebar>

          <Sidebar.Pusher dimmed={sidebarOpened}>
            <Segment
              inverted
              textAlign="center"
              style={{ minHeight: 350, padding: "1em 0em" }}
              vertical
            >
              <Container>
                <Menu inverted pointing secondary size="large">
                  <Menu.Item onClick={this.handleToggle}>
                    <Icon name="sidebar" />
                  </Menu.Item>
                  <Menu.Item position="right">
                    <Button as="a" inverted>
                      Log in
                    </Button>
                    <Button as="a" inverted style={{ marginLeft: "0.5em" }}>
                      Sign Up
                    </Button>
                  </Menu.Item>
                </Menu>
              </Container>
              <HomepageHeading mobile />
            </Segment>

            {children}
          </Sidebar.Pusher>
        </Sidebar.Pushable>
      </Media>
    )
  }
}

MobileContainer.propTypes = {
  children: PropTypes.node,
}

const ResponsiveContainer = ({ children }) => (
  /* Heads up!
   * For large applications it may not be best option to put all page into these containers at
   * they will be rendered twice for SSR.
   */
  <MediaContextProvider>
    <DesktopContainer>{children}</DesktopContainer>
    <MobileContainer>{children}</MobileContainer>
  </MediaContextProvider>
)

ResponsiveContainer.propTypes = {
  children: PropTypes.node,
}

const Landing = () => (
  <ResponsiveContainer>
    <Segment style={{ padding: "8em 0em" }} vertical>
      <Grid container stackable verticalAlign="middle">
        <Grid.Row>
          <Grid.Column width={8}>
            <Header as="h3" style={{ fontSize: "2em" }}>
              Atom Rain
            </Header>
            <p style={{ fontSize: "1.33em" }}>
              Develop UI for GraphGrid Software, using React and JavaScript.
              Created over 40 React components for the GraphGrid Software. Wrote
              high quality unit tests using Jest Divided up tasks among the
              frontend team to make Agile meetings more efficient. Taught myself
              D3.js to effectively create an interactive visualization for
              existing data. Coached and shared knowledge with Frontend
              engineers to increase team productivity.
            </p>
            <Header as="h3" style={{ fontSize: "2em" }}>
              Fortisure IT
            </Header>
            <p style={{ fontSize: "1.33em" }}>
              Develop 3 websites and create tutorials for incoming developers.
              Designed and developed Fortisureit.com, using HTML, CSS, and a
              Node.js server to send and receive contact form submissions.
              Developed internal applications for the company's portfolio,
              including a React site using the Google Maps API to show local
              restaurants and a PHP ecommerce site for small businesses. Created
              a HTML, CSS and JavaScript course aimed at teaching incoming
              developers how to
            </p>
          </Grid.Column>
          <Grid.Column floated="right" width={6}>
            <Image
              bordered
              rounded
              size="large"
              src="/images/wireframe/white-image.png"
            />
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column textAlign="center">
            <Button size="huge">Check Them Out</Button>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>

    <Segment>
      <Card.Group itemsPerRow={2}>
        <Card
          image="https://res.cloudinary.com/dz3p8xcr8/image/upload/v1594236149/Portfolio/Screenshot_2020-07-08_Fortisure_IT_1_p8f5d3.png"
          header="Fortisure IT Company Website"
          meta="JavaScript | Node.js | HTML | CSS"
          description="Designed and developed a new company website using Javascript, Node.js, and custom CSS."
          link={true}
          href="https://fortisureit.com/"
        />
        <Card
          image="https://res.cloudinary.com/dz3p8xcr8/image/upload/v1594236140/Portfolio/Screenshot_2020-07-08_Order_For-Sure_1_tppqrg.png"
          header="OrderForSure"
          meta="JavaScript | Node.js | React.js | Semantic UI | Google maps API"
          description="Designed and developed a webapp for viewing an interactive map of local restaurants that feature mobile ordering."
          link={true}
          href="https://github.com/fortisureit/List-Site"
        />
        <Card
          image="https://res.cloudinary.com/dz3p8xcr8/image/upload/v1594237114/Portfolio/Screenshot_2020-07-08_ORDERFORSURE_vy5w8h.png"
          header="Customizable E-Commerce Website"
          meta="PHP | Javascript | Bootstrap | Stripe"
          description="Collaborated with Jr. Developer to build out a fully functional PHP e-commerce website for small businesses"
          link={true}
          href="https://github.com/ajbarbati/PHP-ecommerce"
        />
        <Card
          image="https://res.cloudinary.com/dz3p8xcr8/image/upload/v1642822052/Portfolio/mDD-site-homepage_zagza6.png"
          header="Custom Content Management Website"
          meta="React | Next.js | Node.js | Sanity.io"
          description="A website built for connecting dogs to happy homes, using Next.js and React for the front end and Sanity for the back end. I created a custom content management system (CMS) to allow for employees to add or edit content at will."
          link={true}
          href="https://github.com/ajbarbati/md-doodles"
        />
      </Card.Group>
    </Segment>

    {/* <Segment style={{ padding: "0em" }} vertical>
      <Grid celled="internally" columns="equal" stackable>
        <Grid.Row textAlign="center">
          <Grid.Column style={{ paddingBottom: "5em", paddingTop: "5em" }}>
            <Header as="h3" style={{ fontSize: "2em" }}>
              "What a Company"
            </Header>
            <p style={{ fontSize: "1.33em" }}>
              That is what they all say about us
            </p>
          </Grid.Column>
          <Grid.Column style={{ paddingBottom: "5em", paddingTop: "5em" }}>
            <Header as="h3" style={{ fontSize: "2em" }}>
              "I shouldn't have gone with their competitor."
            </Header>
            <p style={{ fontSize: "1.33em" }}>
              <Image avatar src="/images/avatar/large/nan.jpg" />
              <b>Nan</b> Chief Fun Officer Acme Toys
            </p>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment> */}

    <Segment style={{ padding: "8em 0em" }} vertical>
      <Container text>
        <Header as="h3" style={{ fontSize: "2em" }}>
          React and JavaScript work at AtomRain
        </Header>
        <p style={{ fontSize: "1.33em" }}>
          At AtomRain, their GraphGrid software consists of several
          micro-services, one of which Manager allows the user to visualize and
          manage their data. Utilizing the D3.js framework, I created an
          interactive graph view to help the user understand how their data is
          connected. I implemented many different React components in this
          micro-service and several other areas of GraphGrid. These components
          functions ranged from infinite scrolling and fetching data to complex
          modal systems and more.
        </p>
        <Button as="a" size="large">
          Learn More about GraphGrid
        </Button>

        <Divider
          as="h4"
          className="header"
          horizontal
          style={{ margin: "3em 0em", textTransform: "uppercase" }}
        >
          Education
        </Divider>

        <Header as="h3" style={{ fontSize: "2em" }}>
          Case Western Reserve University
        </Header>
        <Header size="tiny">Full Stack Web Development</Header>
        <p style={{ fontSize: "1.33em" }}>
          Rigorous course in Full Stack Web Development Simulated work
          experience by teaming up with peers on real-world projects. Including
          curriculum covering:
        </p>
        <Container text>
          <List bulleted style={{ margin: "0 0 2em 5em" }}>
            <List.Item>Computer Science applied to JavaScript</List.Item>
            <List.Item>Databases (MySQL, MongoDB)</List.Item>
            <List.Item>
              Server Side Development (Node.js, Express, MERN Stack)
            </List.Item>
            <List.Item>
              Browser Based Technologies (HTML, CSS, JavaScript, jQuery,
              Bootstrap)
            </List.Item>
            <List.Item>
              Deployment (Heroku, Git) - Quality Assurance (Writing Tests)
            </List.Item>
          </List>
        </Container>
        <Button as="a" size="large">
          <a
            href="https://bootcamp.case.edu/coding/"
            style={{ color: "inherit", textDecoration: "none" }}
          >
            Learn more about CWRU Bootcamp
          </a>
        </Button>
      </Container>
    </Segment>

    <Segment inverted vertical style={{ padding: "5em 0em" }}>
      <Container>
        <Grid divided inverted stackable>
          <Grid.Row>
            <Grid.Column width={3}>
              <Header inverted as="h4" content="About" />
              <List link inverted>
                <List.Item as="a">Sitemap</List.Item>
                <List.Item as="a">Contact Us</List.Item>
                <List.Item as="a">Religious Ceremonies</List.Item>
                <List.Item as="a">Gazebo Plans</List.Item>
              </List>
            </Grid.Column>
            <Grid.Column width={7}>
              <Header as="h4" inverted>
                Footer Header
              </Header>
              <p>
                Extra space for a call to action inside the footer that could
                help re-engage users.
              </p>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    </Segment>
  </ResponsiveContainer>
)

export default Landing
