import { useTheme, alpha } from "@mui/material/styles";
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Chip,
  Divider,
  Grid,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import { Heart, Star } from "phosphor-react";
import { Bathtub, Bed, MapPin } from "@phosphor-icons/react";

const images = [
  "https://movia.media/wp-content/uploads/2020/04/billboard-2-768x432.jpg",
  "https://masterbundles.com/wp-content/uploads/2023/12/untitled-2-748.jpg",
  "https://mir-s3-cdn-cf.behance.net/project_modules/fs/c8715b127698925.614776edf3f18.jpg",
  "https://mir-s3-cdn-cf.behance.net/projects/404/6b153c182980621.Y3JvcCw0MDk3LDMyMDUsNjE4LDA.jpg",
  "https://mir-s3-cdn-cf.behance.net/projects/404/dd92c2166397633.Y3JvcCw0NDYzLDM0OTEsMjY1LDA.jpg",
  "https://i.pinimg.com/474x/73/c2/6d/73c26db87c87eb9ed2308ec3286bc6c1.jpg",
  "https://www.gregorczyk.co.uk/img-get2/I0000xBZ1bbHNb6k/fit=1000x750/McDonalds-Spicy-Chicken-Range-Billboard.jpg",
  "https://dorea.org/wp-content/uploads/2017/01/bilboard.jpg",
  "https://www.scrolldroll.com/wp-content/uploads/2022/04/mccafe-best-mcdonalds-ads.jpg",
];
export default function Properties({view}) {
  const theme = useTheme();
  return (
    <Box>
      <Grid container spacing={2}>
        {[...Array(9)].map((elm, index) => (
          <Grid xs={12} md={view==='map'?12:6} item key={index}>
            <Card>
              <Box sx={{ position: "relative" }}>
                <CardMedia
                  sx={{ height: 320 }}
                  title="Villa"
                  image={images[index]}
                />
                <Chip
                  sx={{
                    position: "absolute",
                    top: 10,
                    left: 10,
                    color: theme.palette.common.white,
                    bgcolor: alpha(theme.palette.common.black, 0.4),
                  }}
                  icon={
                    <Star
                      style={{
                        color: theme.palette.warning.dark,
                      }}
                      weight="fill"
                    />
                  }
                  label={4.5}
                />
                <IconButton
                  sx={{
                    position: "absolute",
                    top: 10,
                    right: 10,
                  }}
                >
                  <Heart
                    style={{
                      color: theme.palette.error.main,
                    }}
                  />
                </IconButton>
              </Box>
              <CardContent>
                <Stack spacing={1} >
                  <Stack
                    direction="row"
                    alignItems="center"
                    justifyContent="space-between"
                  >
                    <Typography
                      variant="subtitle2"
                      sx={{
                        fontWeight: 600,
                        fontSize: 16,
                        color: "text.secondary",
                      }}
                    >
                      Place to stay
                    </Typography>
                    <Stack direction="row" spacing={0.5} alignItems="center">
                      <Typography
                        variant="subtitle1"
                        sx={{
                          fontWeight: 500,
                          fontSize: 18,
                          color: "text.secondary",
                          textDecoration: "line-through",
                        }}
                      >
                        $80
                      </Typography>
                      <Stack direction="row" alignItems="center">
                        <Typography
                          variant="subtitle2"
                          sx={{
                            fontSize: 18,
                            color: "text.secondary",
                          }}
                        >
                          $67
                        </Typography>
                        <Typography variant="caption">/Night</Typography>
                      </Stack>
                      <Divider
                        orientation="vertical"
                        sx={{
                          height: 20,
                        }}
                      />
                      <Typography variant="subtitle1">$111 Total</Typography>
                    </Stack>
                  </Stack>
                  <Stack spacing={1} direction="row" alignItems="center">
                    <MapPin weight="bold" />
                    <Typography variant="subtitle2">Toronto, Canada</Typography>
                  </Stack>
                  <Divider />
                  <Stack direction="row" alignItems="center" spacing={2}>
                    <Stack direction="row" spacing={1} alignItems="center">
                      <Bed
                        size={20}
                        weight="bold"
                        style={{ color: theme.palette.grey[600] }}
                      />
                      <Typography variant="subtitle2" sx={{color:'text.secondary'}}>6 beds</Typography>
                    </Stack>
                    <Divider orientation="vertical" sx={{height:15}}/>
                    <Stack direction="row" spacing={1} alignItems="center">
                      <Bathtub
                        size={20}
                        weight="bold"
                        style={{ color: theme.palette.grey[600] }}
                      />
                      <Typography variant="subtitle2" sx={{color:'text.secondary'}}>1 Bath</Typography>
                    </Stack>
                    <Divider orientation="vertical" sx={{height:15}}/>
                    <Stack direction="row" spacing={1} alignItems="center">
                      <Bed
                        size={20}
                        weight="bold"
                        style={{ color: theme.palette.grey[600] }}
                      />
                      <Typography variant="subtitle2" sx={{color:'text.secondary'}}>3 Bedroom</Typography>
                    </Stack>
                  </Stack>

                </Stack>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
