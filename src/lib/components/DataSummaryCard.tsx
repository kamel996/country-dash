import React from 'react'

type DataSummaryCardProps = {
  title: string;
  value: string | number;
  positive?: boolean
};

const DataSummaryCard = ({title, value, positive = true}: DataSummaryCardProps) => {
  return (
    <div className="col-12 md:col-6 xl:col-3">
    <div className="p-card p-4 h-full">
      <span className="font-semibold text-lg">{title}</span>
      <div className="flex justify-content-between align-items-start mt-3">
              <div className="w-6">
                <span className="text-4xl font-bold text-900">{value}</span>
                {positive ? (
                    <div className="text-green-500">
                      <span className="font-medium">+12%</span>
                      <i className="pi pi-arrow-up text-xs ml-2"></i>
                    </div>
                ) : (
                    <div className="text-pink-500">
                      <span className="font-medium">-2%</span>
                      <i className="pi pi-arrow-down text-xs ml-2"></i>
                    </div>
                )}
              </div>

        <div className="w-6">
          {positive ? (
              <svg width="100%" viewBox="0 0 258 96" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M1 93.9506L4.5641 94.3162C8.12821 94.6817 15.2564 95.4128 22.3846 89.6451C29.5128 83.8774 36.641 71.6109 43.7692 64.4063C50.8974 57.2018 58.0256 55.0592 65.1538 58.9268C72.2821 62.7945 79.4103 72.6725 86.5385 73.5441C93.6667 74.4157 100.795 66.2809 107.923 65.9287C115.051 65.5765 122.179 73.0068 129.308 66.8232C136.436 60.6396 143.564 40.8422 150.692 27.9257C157.821 15.0093 164.949 8.97393 172.077 6.43766C179.205 3.9014 186.333 4.86425 193.462 12.0629C200.59 19.2616 207.718 32.696 214.846 31.0487C221.974 29.4014 229.103 12.6723 236.231 5.64525C243.359 -1.38178 250.487 1.29325 254.051 2.63076L257.615 3.96827"
                    style={{ strokeWidth: '2px', stroke: 'var(--primary-color)' }}
                    stroke="10"
                />
              </svg>
          ) : (
              <svg width="100%" viewBox="0 0 115 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M1.5 1L2.74444 2.61495C3.98889 4.2299 6.47778 7.4598 8.96667 9.07151C11.4556 10.6832 13.9444 10.6767 16.4333 11.6127C18.9222 12.5487 21.4111 14.4271 23.9 16.6724C26.3889 18.9178 28.8778 21.5301 31.3667 20.1977C33.8556 18.8652 36.3444 13.5878 38.8333 11.3638C41.3222 9.13969 43.8111 9.96891 46.3 11.9894C48.7889 14.0099 51.2778 17.2217 53.7667 16.2045C56.2556 15.1873 58.7444 9.9412 61.2333 11.2783C63.7222 12.6155 66.2111 20.5359 68.7 21.4684C71.1889 22.401 73.6778 16.3458 76.1667 16.0009C78.6556 15.6561 81.1444 21.0217 83.6333 24.2684C86.1222 27.515 88.6111 28.6428 91.1 27.4369C93.5889 26.2311 96.0778 22.6916 98.5667 22.7117C101.056 22.7317 103.544 26.3112 106.033 29.7859C108.522 33.2605 111.011 36.6302 112.256 38.3151L113.5 40"
                    style={{ strokeWidth: '1px', stroke: 'var(--pink-500)' }}
                />
              </svg>
          )}
        </div>
      </div>
    </div>
  </div>
  )
}

export default DataSummaryCard
