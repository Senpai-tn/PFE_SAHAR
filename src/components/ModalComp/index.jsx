import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Modal,
  Select,
  Stack,
  Tab,
  TextField,
} from '@mui/material'
import React from 'react'
import TabPanel from '@mui/lab/TabPanel'
import TabContext from '@mui/lab/TabContext'
import { TabList } from '@mui/lab'
import { Controller, useForm } from 'react-hook-form'
import {
  DatePicker,
  LocalizationProvider,
  StaticDatePicker,
  StaticDateTimePicker,
} from '@mui/x-date-pickers'
import dayjs from 'dayjs'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'

const ModalComp = ({ open, handleClose }) => {
  const [value, setValue] = React.useState('0')
  const { control, handleSubmit } = useForm({
    defaultValues: {
      category: null,
      service: null,
      country: '',
      city: '',
      state: '',
    },
  })
  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    height: '368px',
    bgcolor: 'background.paper',
    borderRadius: '15px',
    p: 4,
    boxShadow: '0px 0px 45px 12px #798da3 ',
  }

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <form
            onSubmit={handleSubmit((data) => {
              console.log({
                ...data,
                date: dayjs(data.date).format('DD-MM-YYYY'),
              })
            })}
          >
            <TabContext value={value}>
              <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <TabList
                  onChange={handleChange}
                  aria-label="lab API tabs example"
                >
                  <Tab label="1. Service" value="0" />
                  <Tab label="2. Date" value="1" />
                  <Tab label="3. Address" value="2" />
                </TabList>
              </Box>
              <TabPanel value="0" sx={{ height: '200px' }}>
                <Controller
                  control={control}
                  name="category"
                  render={({ field: { value, onChange } }) => (
                    <FormControl fullWidth>
                      <InputLabel id="demo-simple-select-helper-label">
                        Category
                      </InputLabel>
                      <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={value}
                        label="Category"
                        onChange={onChange}
                        fullWidth
                      >
                        <MenuItem value={'category1'}>Category1</MenuItem>
                        <MenuItem value={'category2'}>Category2</MenuItem>
                        <MenuItem value={'category3'}>Category3</MenuItem>
                      </Select>
                    </FormControl>
                  )}
                />
                <Controller
                  control={control}
                  name="service"
                  render={({ field: { value, onChange } }) => (
                    <FormControl fullWidth sx={{ margin: '30px 0 0 0 ' }}>
                      <InputLabel id="demo-simple-select-helper-label">
                        Service
                      </InputLabel>
                      <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={value}
                        label="Service"
                        onChange={onChange}
                        fullWidth
                      >
                        <MenuItem value={'service1'}>Service 1</MenuItem>
                        <MenuItem value={'service2'}>Service 2</MenuItem>
                        <MenuItem value={'service3'}>Service 3</MenuItem>
                      </Select>
                    </FormControl>
                  )}
                />
              </TabPanel>
              <TabPanel value="1" sx={{ height: '200px' }}>
                <Controller
                  control={control}
                  name="date"
                  render={({ field: { value, onChange } }) => (
                    <DatePicker
                      value={value}
                      onChange={onChange}
                      label={'Date'}
                    />
                  )}
                />
              </TabPanel>
              <TabPanel value="2" sx={{ height: '200px' }}>
                <Controller
                  control={control}
                  name="country"
                  render={({ field: { value, onChange } }) => (
                    <TextField
                      fullWidth
                      value={value}
                      onChange={onChange}
                      label={'Country'}
                    />
                  )}
                />
                <Stack direction={'row'} spacing={2} mt={'30px'}>
                  <Controller
                    control={control}
                    name="city"
                    render={({ field: { value, onChange } }) => (
                      <TextField
                        value={value}
                        onChange={onChange}
                        label={'City'}
                      />
                    )}
                  />
                  <Controller
                    control={control}
                    name="state"
                    render={({ field: { value, onChange } }) => (
                      <TextField
                        value={value}
                        onChange={onChange}
                        label={'State'}
                      />
                    )}
                  />
                </Stack>
              </TabPanel>
              <Stack direction={'row'} justifyContent={'center'}>
                <Button type="submit">Search</Button>
              </Stack>
            </TabContext>
          </form>
        </Box>
      </Modal>
    </LocalizationProvider>
  )
}

export default ModalComp
