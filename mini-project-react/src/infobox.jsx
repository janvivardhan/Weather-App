import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import AcUnitRoundedIcon from '@mui/icons-material/AcUnitRounded';
import ThunderstormRoundedIcon from '@mui/icons-material/ThunderstormRounded';
export default function InfoBOX({info}){
    let INIT_URL ="https://tse1.mm.bing.net/th?id=OIP.8KdffgUX64aGGBuKSH7AfwHaE8&pid=Api&P=0&h=180";
    const COLD_URL="https://up.yimg.com/ib/th?id=OIP.debaDUCrSwMCZ-r2rP42BQHaE7&pid=Api&rs=1&c=1&qlt=95&w=183&h=121";
    const HOT_URL="https://tse1.mm.bing.net/th?id=OIP.uvIYZJyJtnjtaUG5AVtTxgHaET&pid=Api&P=0&h=180";
    const RAINY_URL="https://tse1.mm.bing.net/th?id=OIP.fkWr_1EeH5QcmzbfQ7GlvQHaE8&pid=Api&P=0&h=180";
    return (
        <div className="InfoBox">
            <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={info.humidity>80? RAINY_URL :info.temp>15 ? HOT_URL : COLD_URL}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
         {info.city}{info.humidity>80? <ThunderstormRoundedIcon /> :info.temp>15 ? <WbSunnyIcon />: <AcUnitRoundedIcon />}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            <p>Temperature = {info.temp}&deg;C</p>
            <p>Humidity = {info.humidity}</p>
            <p>Max Temperature= {info.max_temp}</p>
            <p>Min Temperature = {info.min_temp}</p>
            <p>Weather can be described as <i> <b>{info.weather}</b></i> and feels like <b> {info.feelsLike}</b></p>
        </Typography>
      </CardContent>
     
    </Card>
        </div>
    )
}