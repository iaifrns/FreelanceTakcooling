
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Info';
import { Typography } from '@mui/material';
import image7 from '../assets/imgM7.jpg'
import image8 from '../assets/imgM8.jpg'
import image9 from '../assets/imgM9.jpg'
import image10 from '../assets/imgM10.jpg'

export default function Section5() {
  return (
    <ImageList sx={{ width: '80%', height: '70%', marginTop: 20 }}>
      <ImageListItem key="Subheader" cols={2}>
        <Typography variant='h5' mb={5}>Gallery</Typography>
      </ImageListItem>
      {itemData.map((item) => (
        <ImageListItem key={item.img}>
          <img
            srcSet={`${item.img}`}
            src={`${item.img}`}
            alt={item.title}
            loading="lazy"
          />
          <ImageListItemBar
            title={item.title}
            actionIcon={
              <IconButton
                sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                aria-label={`info about ${item.title}`}
              >
                <InfoIcon />
              </IconButton>
            }
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}

const itemData = [
  {
    img: image10,
    title: 'Installation of cold room and air conditioner.',
    featured: true,
  },
  {
    img: image7,
    title: 'Troubleshooting of refrigerator, air conditioner, and cold room.',
  },
  {
    img: image8,
    title: 'Sale of refrigeration equipment.',
  },
  {
    img: image9,
    title: 'Maintainance of refrigeration equipment.',
  }
];