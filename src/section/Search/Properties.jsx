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
import { Link } from "react-router-dom";
import { Star, Heart, MapPin, Bed, Bathtub } from "phosphor-react";

const images = [
  "https://i.pinimg.com/originals/6d/89/87/6d89870c4ed04149f409698b1dfe5a60.jpg",
  "https://homeadore.com/wp-content/uploads/2017/04/004-rising-ridge-residence-architects.jpg",
  "https://klike.net/uploads/posts/2023-03/1679457956_3-11.jpg",
  "https://klike.net/uploads/posts/2023-03/1679457964_2-2.jpg",
  "https://w.forfun.com/fetch/50/501ec91cd9e77c8a9e58f788f1c67451.jpeg?w=1470&r=0.5625",
  "https://img.razrisyika.ru/kart/89/354558-krasivyy-dom-11.jpg",
  "https://img.razrisyika.ru/kart/65/1200/258949-dvuhetazhnyy-dom-23.jpg",
  "https://assets.architecturaldesigns.com/plan_assets/21093/original/21093DR_1524152558.jpg",
  "https://mykaleidoscope.ru/uploads/posts/2022-07/1658197588_44-mykaleidoscope-ru-p-dom-moei-mechti-dizain-krasivo-foto-44.jpg ",
];
export default function Properties({ view }) {
  const theme = useTheme();
  return (
    <Box>
      <Grid container spacing={2}>
        {[...Array(9)].map((elm, index) => (
          <Grid xs={12} md={view === "map" ? 12 : 6} item key={index}>
            <Link to="/detail" style={{ textDecoration: "none" }}>
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
                        style={{ color: theme.palette.warning.dark }}
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
                    <Heart style={{ color: theme.palette.error.main }} />
                  </IconButton>
                </Box>
                <CardContent>
                  <Stack spacing={1}>
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
                      <Typography variant="subtitle2">
                        Toronto, Canada
                      </Typography>
                    </Stack>
                    <Divider />
                    <Stack direction="row" alignItems="center" spacing={2}>
                      <Stack direction="row" spacing={1} alignItems="center">
                        <Bed
                          size={20}
                          weight="bold"
                          style={{ color: theme.palette.grey[600] }}
                        />
                        <Typography
                          variant="subtitle2"
                          sx={{ color: "text.secondary" }}
                        >
                          6 beds
                        </Typography>
                      </Stack>
                      <Divider orientation="vertical" sx={{ height: 15 }} />
                      <Stack direction="row" spacing={1} alignItems="center">
                        <Bathtub
                          size={20}
                          weight="bold"
                          style={{ color: theme.palette.grey[600] }}
                        />
                        <Typography
                          variant="subtitle2"
                          sx={{ color: "text.secondary" }}
                        >
                          1 Bath
                        </Typography>
                      </Stack>
                      <Divider orientation="vertical" sx={{ height: 15 }} />
                      <Stack direction="row" spacing={1} alignItems="center">
                        <Bed
                          size={20}
                          weight="bold"
                          style={{ color: theme.palette.grey[600] }}
                        />
                        <Typography
                          variant="subtitle2"
                          sx={{ color: "text.secondary" }}
                        >
                          3 Bedroom
                        </Typography>
                      </Stack>
                    </Stack>
                  </Stack>
                </CardContent>
              </Card>
            </Link>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
