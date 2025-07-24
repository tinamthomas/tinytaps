import SelectableCard from './SelectableCard';
import Box from '@mui/material/Box';

function CardSet(props) {
    const cards = [
        {
            title: 'Bunny',
            description: 'Hop little bunny hop hop hop',
            image: '/images/bunny.jpg'
        },
        {
            title: 'Cat',
            description: 'Meow meow meow',
            image: '/images/cat.jpg'
        },
        {
            title: 'Duck',
            description: 'Quack quack quack',
            image: '/images/duck.jpg'
        },
        {
            title: 'Dinosaur',
            description: 'Roar roar roar',
            image: '/images/dinosaur.jpg'
        },
        {
            title: 'Strawberry',
            description: 'Red red red',
            image: '/images/strawberry.jpg'
        }, 
        {
            title: 'Turtle',
            description: 'Slow slow slow',
            image: '/images/turtle.jpg'
        },
        {
            title: 'Pig',
            description: 'Oink oink oink',
            image: '/images/pig.jpg'
        },
        {
            title: 'Tiger',
            description: 'Roar roar roar',
            image: '/images/tiger.jpg'
        },
        {
            title: 'Dog',
            description: 'Woof woof woof',
            image: '/images/dog.jpg'
        },
        {
            title: 'Cow',
            description: 'Moo moo moo',
            image: '/images/cow.jpg'
        }
        
    ];
    return (
    <>
        <Box
      sx={{
        width: '100%',
        display: 'grid',
        gridTemplateColumns: {
          xs: 'repeat(auto-fill, minmax(300px, 1fr))',
          sm: 'repeat(auto-fill, minmax(320px, 1fr))',
          md: 'repeat(auto-fill, minmax(320px, 1fr))',
          lg: 'repeat(auto-fill, minmax(350px, 1fr))',
        },
        gap: { xs: 2, sm: 3, md: 3 },
        alignItems: 'stretch',
        justifyItems: 'stretch',
      }}
    >
        {cards.map((card, index) => (
            <SelectableCard 
              key={card.title} 
              title={card.title} 
              description={card.description} 
              image={card.image} 
            />
        ))}
        </Box>
    </>
    );
  }

  export default CardSet;