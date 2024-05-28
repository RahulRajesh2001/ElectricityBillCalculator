import React from 'react';

const Result_Section = ({ billDetails }) => {
  return (
    billDetails ? (
      <div className='md:w-[30%] vvsm:w-[90%] h-[500px] shadow-2xl rounded-sm'>
        <div className='h-[50px] bg-[#0395d9] flex justify-between items-center px-4'>
          <div className='text-[#fff] font-semibold text-[16px]'>
            Bill Details
          </div>
          <div className='text-[#fff] font-semibold text-[16px]'>Amount(₹)</div>
        </div>
        {/* Sections */}
        <div className='h-[50px] border-b flex justify-between items-center px-4'>
          <div className='text-[#212529] text-[15px]'>Energy Charge (EC)*</div>
          <div className='text-[#212529] vvsm:text-[13px] ssm:text-[14px] md:text-[16px]'>
            {billDetails?.energyCharge || 0}
          </div>
        </div>
        <div className='h-[50px] border-b flex justify-between items-center px-4'>
          <div className='text-[#212529] text-[15px]'>Duty</div>
          <div className='text-[#212529] vvsm:text-[13px] ssm:text-[14px] md:text-[16px]'>
            {billDetails?.currentDuty?.toFixed(3) || 0}
          </div>
        </div>
        <div className='h-[50px] border-b flex justify-between items-center px-4'>
          <div className='text-[#212529] text-[15px]'>Fixed Charge (FC)*</div>
          <div className='text-[#212529] vvsm:text-[13px] ssm:text-[14px] md:text-[16px]'>
            {billDetails?.adjustedFixedCharge || 0}
          </div>
        </div>
        <div className='h-[50px] border-b flex justify-between items-center px-4'>
          <div className='text-[#212529] text-[15px]'>Meter Rent</div>
          <div className='text-[#212529] vvsm:text-[13px] ssm:text-[14px] md:text-[16px]'>
            {billDetails?.adjustedMeterRent || 0}
          </div>
        </div>
        <div className='h-[50px] border-b flex justify-between items-center px-4'>
          <div className='text-[#212529] text-[15px]'>Meter Rent Central GST</div>
          <div className='text-[#212529] vvsm:text-[13px] ssm:text-[14px] md:text-[16px]'>
            {billDetails?.adjustedMeterRentCentralGST || 0}
          </div>
        </div>
        <div className='h-[50px] border-b flex justify-between items-center px-4'>
          <div className='text-green-600 text-[15px]'>FC Subsidy</div>
          <div className='text-green-600 vvsm:text-[13px] ssm:text-[14px] md:text-[16px]'>
            -{billDetails?.adjustedSubsidy || 0}
          </div>
        </div>
        <div className='h-[50px] border-b flex justify-between items-center px-4'>
          <div className='text-[#212529] text-[15px]'>Meter Rent State GST</div>
          <div className='text-[#212529] vvsm:text-[13px] ssm:text-[14px] md:text-[16px]'>
            {billDetails?.adjustedMeterRentStateGST || 0}
          </div>
        </div>
        <div className='h-[90px] bg-[#0395d9] flex justify-between items-center px-4'>
          <div>
            <div className='text-[#fff] font-semibold text-[16px]'>
              Total Amount
            </div>
            <div className='text-[#fff] font-semibold text-[9px]'>
              * Fraction of rupees rounded off in total amount, is adjusted in
              Energy Charge/Fixed Charge.
            </div>
          </div>
          <div className='text-[#fff] font-semibold text-[15px]'>
            {Math.floor(billDetails?.total)}.00
          </div>
        </div>
      </div>
    ) : (
      <div></div>
    )
  );
};

export default Result_Section;
