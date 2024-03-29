import {PieChart, Pie, Legend, Cell} from 'recharts'

import './index.css'

const VaccinationByAge = prop => {
  const {data1} = prop
  //   console.log(prop)

  //   const {age, count} = data1
  //   console.log(data1)

  return (
    <div>
      <h1>Vaccination by age</h1>
      <>
        <PieChart width={1000} height={300}>
          <Pie
            cx="50%"
            cy="50%"
            data={data1}
            startAngle={0}
            endAngle={360}
            innerRadius="0%"
            outerRadius="70%"
            dataKey="count"
          >
            <Cell name="18-44" fill="#fecba6" />
            <Cell name="45-60" fill="#b3d23f" />
            <Cell name="Above 60" fill="#a44c9e" />
          </Pie>
          <Legend iconType="circle" />
        </PieChart>
      </>
    </div>
  )
}

export default VaccinationByAge
