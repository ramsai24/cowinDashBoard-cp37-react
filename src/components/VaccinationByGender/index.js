import {PieChart, Pie, Legend, Cell} from 'recharts'

import './index.css'

const VaccinationByGender = prop => {
  const {data1} = prop
  console.log(prop)
  //   const myArray = ['iBHubs', 'CyberEye', 'ProYuga']
  //   console.log(typeof myArray)
  //   const reversedArray = myArray.reverse()

  //   console.log(reversedArray)

  //   const {count, gender} = data1
  console.log(data1)
  const newData = data1.reverse()
  console.log('newData', newData[0])

  return (
    <div>
      <h1>Vaccination by gender</h1>
      <>
        <PieChart width={1000} height={300}>
          <Pie
            cx="50%"
            cy="50%"
            data={data1}
            startAngle={180}
            endAngle={0}
            innerRadius="40%"
            outerRadius="70%"
            dataKey="count"
          >
            <Cell name="Male" fill="#fecba6" />
            <Cell name="Female" fill="#b3d23f" />
            <Cell name="others" fill="#a44c9e" />
          </Pie>
          <Legend iconType="circle" />
        </PieChart>
      </>
    </div>
  )
}

export default VaccinationByGender
