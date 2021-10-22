import { Edit } from "@mui/icons-material";
import { Button, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import CustomTextField from "../UI/CustomTextField";

function EditPersonalForm(props) {
  return (
    <Box sx={{ p: { xs: 0, md: 10 }, pt: { xs: 0, md: 0 } }}>
      <Typography variant="h6" color="textSecondary">
        تعديل البيانات الشخصية
      </Typography>
      <Box component="form" width="100%" noValidate sx={{ mt: 4 }}>
        <Grid container spacing={2} rowSpacing={3}>
          <Grid item xs={12} md={6}>
            <CustomTextField
              label="الاسم"
              variant="standard"
              size="small"
              defaultValue="Mostafa"
              required={true}
              fullWidth
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <CustomTextField
              label="الكنية"
              variant="standard"
              defaultValue="Milly"
              size="small"
              required={true}
              fullWidth
            />
          </Grid>
          <Grid item xs={12} md={7}>
            <CustomTextField
              label="البريد الالكتروني"
              variant="standard"
              defaultValue="mostafamilly6@gmail.com"
              size="small"
              fullWidth
              required={true}
            />
          </Grid>
          <Grid item xs={false} md={5}></Grid>
          <Grid item xs={12} md={7}>
            <CustomTextField
              label="كلمة السر الجديدة"
              variant="standard"
              type="password"
              size="small"
              fullWidth
              required={true}
            />
          </Grid>
          <Grid item xs={false} md={5}></Grid>
          <Grid item xs={12} md={7}>
            <CustomTextField
              label="اسم المركز"
              variant="standard"
              size="small"
              defaultValue="مجوهرات فريج"
              fullWidth
              required={true}
            />
          </Grid>
          <Grid item xs={false} md={5}></Grid>
          <Grid item xs={12} md={10}>
            <CustomTextField
              label="العنوان"
              variant="standard"
              size="small"
              multiline
              rows={2}
              defaultValue="دمشق - صالحية - سوق الحميدية"
              fullWidth
              required={true}
            />
          </Grid>
        </Grid>
        <Button variant="contained" endIcon={<Edit />} sx={{ mt: 3, mb: 4 }}>
          عدل
        </Button>
      </Box>
    </Box>
  );
}

export default EditPersonalForm;
