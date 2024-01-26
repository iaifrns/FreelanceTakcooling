import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { Typography } from '@mui/material';
import image7 from '../assets/clime.jpg'
import image8 from '../assets/frige.jpg'
import image9 from '../assets/imgM11.jpg'
import image10 from '../assets/imgM11.jpg'

export default function Section5({ isSmallScreen }: { isSmallScreen: boolean }) {

  return (
    <ImageList sx={{ width: '80%', height: '90%', marginTop: isSmallScreen ? 30 : 10}}>
      <ImageListItem key="Subheader" cols={4}>
        <Typography variant='h5' mb={5}>Gallery</Typography>
      </ImageListItem>
      <ImageList cols={4}>
        {itemData.map((item, index) => (
          <ImageListItem key={index} cols={item.cols || 1} rows={item.rows || 1}>
            <img
              {...srcset(item.img, 120, item.rows, item.cols)}
              alt={item.title}
              loading="lazy"
            />
          </ImageListItem>
        ))}
      </ImageList>
    </ImageList>
  );
}

function srcset(image: string, size: number, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${size * rows
      }&fit=crop&auto=format&dpr=2 2x`,
  };
}

const itemData = [
  {
    img: image10,
    title: 'Breakfast',
    rows: 2,
    cols: 2,
  },
  {
    img: image7,
    title: 'Burger',
    rows: 2,
    cols: 2,
  },
  {
    img: image8,
    title: 'Camera',
    rows: 2,
    cols: 2,
  },
  {
    img: image9,
    title: 'Coffee',
    rows: 2,
    cols: 2,
  },
];