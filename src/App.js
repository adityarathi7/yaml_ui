import Grid from '@mui/material/Grid';
import React from 'react';
import AddTable from './AddTable';
import BigQueryDetails from './BigQueryDetails';
import ControlTableInfo from './ControlTableInfo';
import GCSBucketDetails from './GCSBucketDetails';
import IngestionDatabase from './IngestionDatabase';
import SourceType from './SourceType';

const App = () => {


  return (
    <>
    
    <Grid container rowSpacing={1} columnSpacing={{ xs: 4, sm: 2, md:1 }}>

    <Grid item xs={6}>
      <AddTable />
    </Grid>

    <Grid item xs={6}>
      <GCSBucketDetails/>
    </Grid>
    
    <Grid item xs={6}>
      <BigQueryDetails/>
</Grid>

<Grid item xs={6}>
      <ControlTableInfo/>
      </Grid>

      <Grid item xs={6}>
      <SourceType/>
      </Grid>

      <Grid item xs={6}>

      <IngestionDatabase/>

      </Grid>

    </Grid>

    </>
  );
}

export default App;
