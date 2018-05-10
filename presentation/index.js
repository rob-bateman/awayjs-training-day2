// Import React
import React from "react";

// Import Spectacle Core tags
import {
  BlockQuote,
  Cite,
  Deck,
  Heading,
  ListItem,
  List,
  Quote,
  Slide,
  Text,
  Link,
  Markdown,
  S,
  Appear,
  Table,
  TableItem,
  TableHeaderItem,
  TableRow,
  TableBody,
  Layout,
  Fill,
  Fit,
  CodePane,
  Code,
  Image,
} from "spectacle";

import CodeSlide from 'spectacle-code-slide';

// Import theme

//import createTheme from "spectacle/lib/themes/default";
import createTheme from "spectacle-theme-nova";

import 'spectacle-theme-nova/syntax/prism.nova.css';
import 'spectacle-theme-nova/syntax/prism-typescript'

// Require CSS
require("normalize.css");

const theme = createTheme();

const inline = { display:'inline', margin:0 };
const gutter = '25px';
const images = {
  background: require('../assets/Blue-Computer-Backgrounds2.jpg')
};

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck transition={["fade"]} transitionDuration={500} theme={theme}>
        <Slide bgDarken='0.7' bgImage={images.background}>
          <Heading size={1} fit>AwayJS Training Day 2</Heading>
          <Heading size={3}>Parsers, AVM1, Lesson Manager</Heading>
        </Slide>
        <Slide>
          <Heading size={2}>Yarn FTW</Heading>
          <List>
            <ListItem>Installing from <Link href="https://yarnpkg.com/lang/en/docs/install">Yarn</Link></ListItem>
            <ListItem><Code>yarn</Code> in place of <Code>npm install</Code></ListItem>
            <ListItem><Code>yarn link</Code> in place of <Code>npm link</Code></ListItem>
            <ListItem>new batch files in <Code>awayjs-full</Code> for Yarn linking</ListItem>
          </List>
        </Slide>
        <Slide>
          <Heading size={2} fit>LessonManager introduction</Heading>
          <List>
            <ListItem>Checkout <Link href="https://github.com/rob-bateman/awayjs-training-examples">training examples project</Link></ListItem>
            <ListItem>Checkout <Link href="https://bitbucket.org/WhizzEducation/lesson-manager/src/master">lesson-manager</Link></ListItem>
            <ListItem>Use <Code>yarn</Code> and <Code>yarn link</Code></ListItem>
            <ListItem>try out <Code>npm run watch</Code></ListItem>
          </List>
        </Slide>
        <Slide>
          <Heading size={2} fit>Modifying / Publishing code</Heading>
          <List>
            <ListItem>Creating a feature branch  with <Code>git checkout -b</Code></ListItem>
            <ListItem>Git commits (use <Code>git stash</Code> / <Code>git pull</Code> before committing locally</ListItem>
            <ListItem>publishing with <Code>npm version patch</Code></ListItem>
          </List>
        </Slide>
        <Slide>
          <Text>Break</Text>
        </Slide>
        <Slide>
          <Heading size={2}>The SWFParser</Heading>
          <List>
            <ListItem>Factory adapters: <Code>AVM1SceneGraphFactory</Code></ListItem>
            <ListItem>Data structures and <Code>SWFParser</Code> functions</ListItem>
            <ListItem>Playback of various test SWFs</ListItem>
          </List>
        </Slide>
        <Slide>
          <Text>Lunch</Text>
        </Slide>
        <Slide>
          <Heading size={2}>AVM1</Heading>
          <List>
            <ListItem>Tour of the library folder data structures</ListItem>
            <ListItem><Code>interpreter</Code> and <Code>runtime</Code></ListItem>
          </List>
        </Slide>
        <Slide>
          <Text>Break</Text>
        </Slide>
        <Slide>
          <Heading size={2} fit>Wrappers and API hooks</Heading>
          <List>
            <ListItem><Code>SystemManager</Code> and <Code>SoundManager</Code></ListItem>
            <ListItem>The <Code>Stage</Code> wrapper</ListItem>
          </List>
        </Slide>
        <Slide>
          <Text>Break</Text>
        </Slide>
        <Slide>
          <Heading size={2}>Stage Exploration</Heading>
          <Text>The <Code>Stage</Code> object wraps a single canvas</Text>
          <Text>GPU methods are exposed through the <Code>IContext</Code> interface.</Text>
          <Text>Stage abstractions hold asset properties unique to each stage</Text>
          <Text>🐙</Text>
        </Slide>
        <Slide>
          <Heading size={2}>Renderer Exploration</Heading>
          <Text>The <Code>Renderer</Code> object wraps the <Code>Stage</Code></Text>
          <Text><Code>IRendererable</Code> objects are collected and rendered by the <Code>Renderer</Code></Text>
          <Text>The <Code>IRendererable</Code> abstraction holds all state data for rendering</Text>
          <Text>🐳</Text>
        </Slide>
        <Slide>
          <Heading size={2}>Partition &amp; Traverser</Heading>
          <Text>A <Code>Traverser</Code> object is used to collect <Code>Entity</Code> objects from a <Code>Partition</Code></Text>
          <Text>Pertitions are created and managed by the <Code>View</Code>, and updated by the <Code>Scene</Code></Text>
          <Text>Both <Code>Renderer</Code> and <Code>RayCastPicker</Code> traverse partitions</Text>
          <Text>🐡</Text>
        </Slide>
        <Slide>
          <Text>End of day 2</Text>
        </Slide>
      </Deck>
    );
  }
}
