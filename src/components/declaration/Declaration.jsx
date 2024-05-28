import React from 'react'

const Declaration = () => {
  return (
    <div className='md:w-[30%] vvsm:w-[90%] h-[500px] flex flex-col justify-between rounded-sm '>
      <div className='h-[38%] bg-[#d1ecf1] shadow-xl  rounded-sm flex justify-center items-center'>
        <div className='w-[85%]'>
          <ul style={{ listStyleType: 'dot' }}>
            <li className='text-[#0c5460] vvsm:text-[13px] ssm:text-[13px] md:text-[14px]'>
              This calculator is intended for calculation of Electricity Bill
              amount based on units consumed.
            </li>
            <li className='text-[#0c5460] vvsm:text-[13px] ssm:text-[13px] md:text-[14px]'>
              Actual Bill may vary according to the consumer status.
            </li>
            <li className='text-[#0c5460] vvsm:text-[13px] ssm:text-[13px] md:text-[14px]'>
              Fraction of rupees rounded off in final bill amount, is adjusted
              in Energy Charge/Fixed Charge.
            </li>
          </ul>
        </div>
      </div>
      <div className='h-[60%] bg-[#d1ecf1] shadow-xl  rounded-sm flex justify-center items-center '>
        <div className='w-[85%]'>
          <u className='text-[#0c5460] vvsm:text-[9px] ssm:text-[9px] md:text-[11px]'>PANDEMIC - COVID19 - LOCKDOWN PERIOD BILLS</u>
          <ul style={{ listStyleType: 'dot' }}>
            <li className='text-[#0c5460] vvsm:text-[9px] ssm:text-[9px] md:text-[11px]'>
              കോവിഡ്‌ -19 പകര്‍ച്ചവ്യാധിയോടനുബന്ധിച്ചുള്ള ലോക്ഡൌണ്‍ കാലയളവില്‍
              ഒരു വിഭാഗം ഉപഭോക്താക്കള്‍ക്ക് മീറ്റര്‍ റീഡിംഗ് നാല് മാസം
              ആയപ്പോഴാണ് എടുക്കാന്‍ കഴിഞ്ഞത്. അതുകൊണ്ട് മൊത്തം ഉപഭോഗത്തിന്റെ
              പകുതി ദ്വൈമാസ ഉപഭോഗമായി കണക്കാക്കാം.
            </li>
            <li className='text-[#0c5460] vvsm:text-[9px] ssm:text-[9px] md:text-[11px]'>
              ദ്വൈമാസ ഉപഭോഗത്തിനുള്ള തുക ബില്‍ കാല്‍ക്കുലേറ്റര്‍ ഉപയോഗിച്ച്
              കണ്ടുപിടിച്ച് അതിനെ രണ്ടു കൊണ്ട് ഗുണിച്ചാല്‍ നാല് മാസത്തെ ബില്‍
              തുക ലഭിക്കും.
            </li>
            <li className='text-[#0c5460] vvsm:text-[9px] ssm:text-[9px] md:text-[11px]'>
              സപ്ലൈകോഡ് 2014, സെക്ഷന്‍ 124 പ്രകാരം, മീറ്റര്‍ റീഡിംഗ് ലഭിക്കാത്ത
              കാലയളവില്‍, ഉപഭോക്താക്കളുടെ മുന്‍കാലങ്ങളിലെ ഉപഭോഗത്തിന്റെ ശരാശരി
              എടുത്താണ് ബില്‍ തയ്യാറാക്കിയത്.
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Declaration
