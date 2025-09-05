import Card from '@mui/material/Card';

import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment';

import Typography from '@mui/material/Typography';
export default function Info({info}){
    const RAIN_URL="https://images.unsplash.com/photo-1519692933481-e162a57d6721?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8UkFJTnxlbnwwfHwwfHx8MA%3D%3D"
    const COLD_URL="https://images.unsplash.com/photo-1612208695882-02f2322b7fee?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Q09MRCUyMFdFQVRIRVJ8ZW58MHx8MHx8fDA%3D"
    const HOT_URL="https://images.unsplash.com/photo-1504370805625-d32c54b16100?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aG90JTIwd2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D"
    const initial_img="https://images.unsplash.com/photo-1733164847768-694d4bd1ecf7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fERVU1RZJTIwV0VBVEhFUnxlbnwwfHwwfHx8MA%3D%3D"
    return(
        <div className="InfoBox">
           
                <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={info.humidity>50?RAIN_URL : info.temp>20 ? HOT_URL:COLD_URL}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
         {info.city}&nbsp;&nbsp;&nbsp;{info.temp>20?<LocalFireDepartmentIcon></LocalFireDepartmentIcon>:<AcUnitIcon></AcUnitIcon>}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }} component={"span"}>
        <p>Temperature = {info.temp}&deg;C</p>
        <p>Humidity = {info.humidity}</p>
        <p>Pressure = {info.pressure}</p>
        <p>Weather can be described as {info.weather}</p>
        </Typography>
      </CardContent>
      
    </Card>
        </div>
    )
}