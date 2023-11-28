import React from 'react';
import useAppState from '@/useHooks/useAppState';
import { Grid, Button, Header } from 'semantic-ui-react';
import CatImage from '@/components/CatImage';

export default function Favorites() {
  const appState = useAppState();

  function changeName() {
    const titles = ['Cry', 'Potato', 'Lobster'];
    const randomTitleIndex = Math.floor(Math.random() * titles.length);

    appState.updateAppState({ user: `Ty the ${titles[randomTitleIndex]} Guy` });
  }

  return (
    <>
      <Grid columns={1}>
        <Grid.Column>
          <Header as='h1'>{appState.user}'s Favorites</Header>
        </Grid.Column>
        <Grid.Column>
          <Button content='Change Name' color='purple' icon='sync' onClick={changeName} />
        </Grid.Column>
        <Grid.Row columns='5'>
          {appState.favoriteCats.map((cat) => {
            return <CatImage key={cat.id} src={cat.url} />;
          })}
        </Grid.Row>
      </Grid>
    </>
  );
}
