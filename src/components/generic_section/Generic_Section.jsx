import * as React from 'react'
import { useState } from 'react'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'
import Radio from '@mui/material/Radio'
import FormControlLabel from '@mui/material/FormControlLabel'
import RadioGroup from '@mui/material/RadioGroup'

const Generic_Section = ({ data, setResult }) => {
  // State for tariff
  const [tariff, setTariff] = useState('')
  const [billingCycle, setBillingCycle] = useState('60')
  const [options, setOptions] = useState([])
  const [purpose, setPurpose] = useState('')
  const [consumedUnits, setUnits] = useState('')
  const [billDetails, setBillDetails] = useState(null)
  const [phase, setPhase] = useState('single_phase')

  // Billing rates and fixed charges
  const singlePhase = {
    round: 0.276,
    duty: 9.974,
    fixed_charge: 80,
    meter_rent: 12,
    meter_rent_central_gst: 1.08,
    meter_rent_state_gst: 1.08,
    subsidy: 40,
  }
  const threePhase = {
    round: 0.46,
    duty: 9.974,
    fixed_charge: 200,
    meter_rent: 30,
    meter_rent_central_gst: 2.7,
    meter_rent_state_gst: 2.7,
  }

  // Handle tariff change
  const handleTariffChange = (event) => {
    const selectedTariff = event.target.value
    setTariff(selectedTariff)

    // Update options for the selected tariff
    const selectedTariffData = data.find((item) => item._id === selectedTariff)
    setOptions(selectedTariffData ? selectedTariffData.options : [])
  }

  // Handle purpose change
  const handlePurposeChange = (event) => {
    setPurpose(event.target.value)
  }

  // Handle billing cycle change
  const handleBillingCycleChange = (event) => {
    setBillingCycle(event.target.value)
  }

  // Handle phase
  const handlephase = (event) => {
    setPhase(event.target.value)
  }

  //for calculating the price
  const calculateBill = () => {
    // Validation
    if (tariff === '') {
      alert('Select the tariff !');
      return; 
    }
  
    if (purpose === '') {
      alert('Select the purpose !');
      return;
    }
  
    if (consumedUnits === '' || isNaN(consumedUnits)) {
      alert('Please enter consumed units!');
      return;
    }
  
    const units = parseFloat(consumedUnits);
  
    if (isNaN(units)) {
      alert('Please enter a valid number for consumed units.');
      return; 
    }
  
    const energyCharge = units * 3.25;
  
    //single phase and three phase had a diffrenet prices
    if (phase === 'single_phase') {
      const roundPercentage = parseFloat(singlePhase.round) / 100;
      const dutyPercentage = parseFloat(singlePhase.duty) / 100;
  
      const currentRound = energyCharge * roundPercentage;
      const currentDuty = energyCharge * dutyPercentage;
  
      const isOneMonthBilling = billingCycle === '30';
  
      const adjustedFixedCharge = isOneMonthBilling
        ? singlePhase.fixed_charge / 2
        : singlePhase.fixed_charge;
      const adjustedMeterRent = isOneMonthBilling
        ? singlePhase.meter_rent / 2
        : singlePhase.meter_rent;
      const adjustedMeterRentCentralGST = isOneMonthBilling
        ? singlePhase.meter_rent_central_gst / 2
        : singlePhase.meter_rent_central_gst;
      const adjustedMeterRentStateGST = isOneMonthBilling
        ? singlePhase.meter_rent_state_gst / 2
        : singlePhase.meter_rent_state_gst;
      const adjustedSubsidy = isOneMonthBilling
        ? singlePhase.subsidy / 2
        : singlePhase.subsidy;
  
      // Calculate total amount
      const total =
        energyCharge +
        currentDuty +
        currentRound +
        adjustedFixedCharge +
        adjustedMeterRent +
        adjustedMeterRentCentralGST +
        adjustedMeterRentStateGST -
        adjustedSubsidy;
  
      const singlePhaseResult = {
        energyCharge,
        currentDuty,
        currentRound,
        adjustedFixedCharge,
        adjustedMeterRent,
        adjustedMeterRentCentralGST,
        adjustedMeterRentStateGST,
        adjustedSubsidy,
        total,
      };
      setBillDetails(singlePhaseResult);
    } else if (phase === 'three_phase') {
      const roundPercentage = parseFloat(threePhase.round) / 100;
      const dutyPercentage = parseFloat(threePhase.duty) / 100;
  
      const currentRound = energyCharge * roundPercentage;
      const currentDuty = energyCharge * dutyPercentage;
  
      const isOneMonthBilling = billingCycle === '30';
  
      const adjustedFixedCharge = isOneMonthBilling
        ? threePhase.fixed_charge / 2
        : threePhase.fixed_charge;
      const adjustedMeterRent = isOneMonthBilling
        ? threePhase.meter_rent / 2
        : threePhase.meter_rent;
      const adjustedMeterRentCentralGST = isOneMonthBilling
        ? threePhase.meter_rent_central_gst / 2
        : threePhase.meter_rent_central_gst;
      const adjustedMeterRentStateGST = isOneMonthBilling
        ? threePhase.meter_rent_state_gst / 2
        : threePhase.meter_rent_state_gst;
  
      // Calculate total amount
      const total =
        energyCharge +
        currentDuty +
        currentRound +
        adjustedFixedCharge +
        adjustedMeterRent +
        adjustedMeterRentCentralGST +
        adjustedMeterRentStateGST;
  
      const threePhaseResult = {
        energyCharge,
        currentDuty,
        currentRound,
        adjustedFixedCharge,
        adjustedMeterRent,
        adjustedMeterRentCentralGST,
        adjustedMeterRentStateGST,
        total,
      };
      setBillDetails(threePhaseResult);
    }
  };
  

  //passing the result
  setResult(billDetails)

  return (
    <div className='w-[92%] h-[90%] flex flex-col justify-around '>
      {/* Tariff box */}
      <div className='flex justify-between items-center vsm:w-full md:w-auto'>
        <div className='font-semibold w-[20%] vvsm:text-[13px] ssm:text-[14px] md:text-[16px]'>Tariff</div>
        <div className='w-[80%]'>
        <FormControl className='w-[100%]'>
          <Select
            value={tariff}
            onChange={handleTariffChange}
            displayEmpty
            inputProps={{ 'aria-label': 'Without label' }}
            className='vvsm:h-[35px] md:h-[40px] w-[100%]'
          >
            <MenuItem value=''>
              <em className='vvsm:text-[13px] ssm:text-[14px] md:text-[16px]'>None</em>
            </MenuItem>
            {data?.map((item) => (
              <MenuItem className='vvsm:text-[13px] ssm:text-[14px] md:text-[16px]' key={item._id} value={item._id}>
                {item.tariff}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        </div>
      </div>

      {/* Purpose box */}
      <div className='flex justify-between items-center vsm:w-full md:w-auto '>
        <div className='font-semibold vvsm:text-[13px] ssm:text-[14px] md:text-[16px]'>Purpose</div>
        <div className='w-[80%]'>
        <FormControl className='w-[100%]'>
          <Select
            value={purpose}
            onChange={handlePurposeChange}
            displayEmpty
            inputProps={{ 'aria-label': 'Without label' }}
            className=' vvsm:h-[35px] md:h-[40px] w-[100%]'
          >
            <MenuItem value=''>
              <em className='vvsm:text-[13px] ssm:text-[14px] md:text-[16px]'>None</em>
            </MenuItem>
            {options.map((option, index) => (
              <MenuItem className='vvsm:text-[13px] ssm:text-[14px] md:text-[16px]' key={index} value={option}>
                {option}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        </div>
        
      </div>

      {/* Billing cycle box radio button */}
      <div className='flex justify-between items-center vsm:w-full md:w-auto'>
        <div className='font-semibold vvsm:text-[13px] ssm:text-[14px] md:text-[16px]'>Billing Cycle</div>
        <div className='w-[80%]'>
        <RadioGroup
          row
          value={billingCycle}
          onChange={handleBillingCycleChange}
        >
          <div className='w-[400px]'>
            <FormControlLabel
              value='60'
              control={<Radio sx={{ transform: 'scale(0.7)' }} />}
              label={<span className='vvsm:text-[13px] ssm:text-[14px] md:text-[16px]'>2 Months</span>}
            />
            <FormControlLabel
              value='30'
              control={<Radio sx={{ transform: 'scale(0.7)' }} />}
              label={<span className='vvsm:text-[13px] ssm:text-[14px] md:text-[16px]'>1 Month</span>}
            />
          </div>
        </RadioGroup>
        </div>
        
      </div>

      {/* Consumed units box */}
      <div className='flex justify-between items-center vsm:w-full md:w-auto'>
        <div className='font-semibold vvsm:text-[13px] ssm:text-[14px] md:text-[16px]'>Consumed Units</div>
        <div className='w-[80%]'>
        <input
          className='border h-[40px] w-[100%] rounded-md border-[#ced4da] mr-3'
          defaultValue=''
          onChange={(e) => setUnits(e.target.value)}
        />
        </div>
        
      </div>

      {/* phase box*/}
      <div className='flex justify-between items-center vsm:w-full md:w-auto'>
        <div className='font-semibold vvsm:text-[13px] ssm:text-[14px] md:text-[16px]'>Phase</div>
        <div className='w-[80%]'>
        <RadioGroup row value={phase} onChange={handlephase}>
          <div className='w-[400px]'>
            <FormControlLabel
              value='single_phase'
              control={<Radio sx={{ transform: 'scale(0.7)' }} />}
              label={<span className='vvsm:text-[13px] ssm:text-[14px] md:text-[16px]'>2 Months</span>}
            />
            <FormControlLabel
              value='three_phase'
              control={<Radio sx={{ transform: 'scale(0.7)' }} />}
              label={<span className='vvsm:text-[13px] ssm:text-[14px] md:text-[16px]'>1 Month</span>}
            />
          </div>
        </RadioGroup>
        </div>
      </div>

      {/* button box */}
      <div className='flex items-center'>
        <button
          onClick={calculateBill}
          className='md:w-[90px] md:h-[40px] vvsm:w-[70px] vvsm:h-[30px] border rounded-lg border-[#007bff] text-[#007bff] vvsm:text-[13px] ssm:text-[14px] md:text-[16px]'
        >
          Submit
        </button>
      </div>
    </div>
  )
}

export default Generic_Section
