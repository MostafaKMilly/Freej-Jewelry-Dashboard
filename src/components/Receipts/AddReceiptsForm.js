import { Add } from "@mui/icons-material";
import { Button, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { fetchGoldsKarats } from "../../redux/slices/goldsKaratsSlice";
import CustomTextField from "../UI/CustomTextField";

function AddReceiptsForm(props) {
  const { control, handleSubmit } = useForm();
  const goldsKarats = useSelector((state) => state.goldsKarats.karats);
  const [selectedKarat, setSelectedKarat] = useState();
  const goldsKaratsIsLoading = useSelector(
    (state) => state.goldsKarats.isLoading
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchGoldsKarats());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (goldsKaratsIsLoading) {
    return <Typography>Loading</Typography>;
  }

  const onSubmit = (data) => {
    const arr = [...props.registerReceiptsArr];
    arr.push({
      ...data,
      karatPrice: goldsKarats[selectedKarat],
    });
    props.setRegisterReceiptsArr(arr);
  };
  return (
    <Box component="form" onSubmit={handleSubmit(onSubmit)}>
      <Grid
        container
        columnSpacing={2}
        rowSpacing={2}
        justifyContent="center"
        alignItems="center"
      >
        <Grid item lg={1.5} xs={12}>
          <Controller
            control={control}
            name="price"
            render={({ field }) => (
              <CustomTextField
                size="small"
                label="ل.س"
                type="number"
                required
                fullWidth
                {...field}
              />
            )}
          />
        </Grid>
        <Grid item lg={3} xs={12}>
          <Controller
            control={control}
            name="description"
            render={({ field }) => (
              <CustomTextField
                size="small"
                label="مواصفات البضاعة ونوعها"
                required
                fullWidth
                {...field}
              />
            )}
          />
        </Grid>
        <Grid item lg={1} xs={12}>
          <Controller
            control={control}
            name="number"
            render={({ field }) => (
              <CustomTextField
                size="small"
                label="عدد"
                type="number"
                required
                fullWidth
                {...field}
              />
            )}
          />
        </Grid>
        <Grid item lg={1.2} xs={12}>
          <Controller
            control={control}
            name="santem"
            render={({ field }) => (
              <CustomTextField
                size="small"
                label="سانتيم"
                type="number"
                required
                fullWidth
                {...field}
              />
            )}
          />
        </Grid>
        <Grid item lg={1} xs={12}>
          <Controller
            control={control}
            name="gram"
            render={({ field }) => (
              <CustomTextField
                size="small"
                label="غرام"
                type="number"
                required
                fullWidth
                {...field}
              />
            )}
          />
        </Grid>
        <Grid item lg={1} xs={12}>
          <Controller
            control={control}
            name="karat"
            render={({ field }) => (
              <CustomTextField
                select
                size="small"
                label="عيار"
                fullWidth
                required
                SelectProps={{
                  native: true,
                }}
                {...field}
                onChange={(e) => {
                  field.onChange(e.target.value);
                  setSelectedKarat(parseInt(e.target.value));
                }}
              >
                <option key={0} defaultValue></option>
                {Object.keys(goldsKarats).map((karat) => (
                  <option key={karat}>{karat}</option>
                ))}
              </CustomTextField>
            )}
          />
        </Grid>
        <Grid item lg={2} xs={12}>
          <CustomTextField
            size="small"
            label="سعر الغرام"
            fullWidth
            required
            type="number"
            InputLabelProps={{
              shrink: true,
            }}
            value={goldsKarats[selectedKarat]}
            readOnly
          />
        </Grid>
        <Grid item lg={4} xs={12}>
          <Controller
            control={control}
            name="notes"
            render={({ field }) => (
              <CustomTextField
                size="small"
                label="ملاحظات"
                multiline
                rows={2}
                fullWidth
                {...field}
              />
            )}
          />
        </Grid>
        <Grid item>
          <Button variant="contained" type="submit" endIcon={<Add />}>
            اضافة
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
}

export default AddReceiptsForm;
