import SelectableCard from './SelectableCard';
import Box from '@mui/material/Box';

function CardSet(props) {
    const cards = [
        {
            title: 'Bunny',
            description: 'Hop litte bunny hop hop hop',
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
            title: 'Turtle ',
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
        
    ];
    return (
    <>
        <Box
      sx={{
        width: '100%',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(min(300px, 100%), 1fr))',
        gap: 2,
      }}
    >
        {cards.map((card) => (
            <SelectableCard key={card.title} title={card.title} description={card.description} image={card.image} />
        ))}
        </Box>
    </>
    );
  }

  export default CardSet;