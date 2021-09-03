import React from "react";
import { DiFirebase, DiReact, DiZend } from "react-icons/di";
import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import { Box, Boxes, BoxText } from "../Acomplishments/AcomplishmentsStyles";
import {
  List,
  ListContainer,
  ListItem,
  ListParagraph,
  ListTitle,
} from "./TechnologiesStyles";

const Technologies = () => (
  <Section id="tech">
    <SectionDivider />
    <SectionTitle main>Technologies</SectionTitle>
    <SectionText>
      I have worked with a range of technologies from Front-End to Back-End.
    </SectionText>
    <List>
      <Boxes>
        <Box>
          <ListItem>
            <DiReact size="3rem" />
            <ListContainer>
              <ListTitle>Front-End</ListTitle>
              <ListParagraph>
                Experience with <br />
                HTML <br />
                CSS <br />
                JavaScript <br />
                React.js <br />
              </ListParagraph>
            </ListContainer>
          </ListItem>
        </Box>
      </Boxes>
      <Boxes>
        <Box>
          <ListItem>
            <DiFirebase size="3rem" />
            <ListContainer>
              <ListTitle>Back-End</ListTitle>
              <ListParagraph>
                Experience with <br />
                <ul>
                  <li>Node.js</li>
                  <li>Express.js</li>
                  <li>Mongo</li>
                  <li>Mongoose</li>
                </ul>
              </ListParagraph>
            </ListContainer>
          </ListItem>
        </Box>
      </Boxes>

      <Boxes>
        <Box>
          <ListItem>
            <DiZend size="3rem" />
            <ListContainer>
              <ListTitle>UI/UX</ListTitle>
              <ListParagraph>
                Experience with <br />
                <ul>
                  <li>Figma</li>
                </ul>
              </ListParagraph>
            </ListContainer>
          </ListItem>
        </Box>
      </Boxes>
    </List>
  </Section>
);

export default Technologies;
