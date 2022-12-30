import { StyleSheet, Text, View,TextInput,ImageBackground} from 'react-native'
import React from 'react'
import { Button, Card, IconButton } from "react-native-paper";
import { color } from 'react-native-reanimated';
const image = { uri: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMSEhUQEhMWFRUVEBUQFRUVFRUVFRUQFRUWFhUVFRUYHSggGBolHRUVITEhJSkrLi4uFx8zODMtNygtLisBCgoKDg0OFw8PGysfFR0tLS0tLSstKy0rLS0tLS0tLS0tLS0rLS0tKy0tLSstLS0tLS0tLS0tLS0tLS0rLS0tLf/AABEIAI4BYgMBIgACEQEDEQH/xAAcAAABBQEBAQAAAAAAAAAAAAABAAIDBAUGBwj/xABGEAACAQECCggDBAcHBQEAAAAAAQIDBBEFEhMhMUFRYZHRBhRScYGhsfAVksEHMmLhIkJDg5PS8SNEVHKCssJTY6LD4hb/xAAYAQEBAQEBAAAAAAAAAAAAAAAAAQIDBP/EACIRAQACAgMAAgIDAAAAAAAAAAABEQISEyFRA2ExQSKR8P/aAAwDAQACEQMRAD8A6mLJEyCLHxZxVPFj0yGLJEwJkx6ZDFj0wiRMcmMTHJgPTDeMTCgHoN40QDrw3jQgOvEAQDhAEARCEAhCAARAQQEIAgCC8QAE2AQgCIF4GEJgYhBSEBiAN4BAAQgMQCvGsLGMBNjWxNjbwCAAgrMiyWLKUa6JY2hEuGtZXEySLKca6JFXQuDWVuLJEykrQiSNoQuE1lbTHJlVWhDlaELSpWkxyZWVoQ5WhC4KlYvDeV1aEHrCFlSsXhvK+XQ7LoWVKdMV5Aq6Dl0LSk4ryHLoWXQspNeG8gy6Dl0LKTAIsshZZCykqCQ5ZByyFlJBEeWQMshZSUDI8sgZZCykgiNVULKoFJBEWWQsqgUlAR5ZAyyLZSRgGZZAyqJZSQBHlkLLIWtHiInWQsshZSRjGNdZAdZCyhY1jHWQ11kCj7xEWVQgtOZiyRNkaHo871pVJhx2RoNzBSRTZIpsrpMegJ8diyjIkSwpt6ELShyjCqrBGjJ6nwLFPB1SWiLCdIcsw5VmhTwFUe4uUejb/WZe2ZyxYmWYVWZ1FLo/TWksQwRSWotSzyYuRjKb0Jk8LNWeiLOvhQpx0JEmNFahUsz8n05OGDaz1EqwVV2nSushkq+4tJyS5qeDaqKtWlVjpR1cqxXq1IvSKWM3Ju0yQOtM2bdY4yzow61Fxdxl0xmJSK1MXWZDLNZZVJYsUdLYujaSvm7xa5TjDnVaZB6zI7COCqUdSA7DT2Ivbnvi5B2mQ3rUjrZWCm9SIKmCKb1Ds3xcz1th62zdngKBDPo+tTHa7YsfrTB1tmlLo9LUxjwDPaO1vFQ62wdaZe+BVAPAVQWt4qPW2J2xl1YBqEsOjs3pYsvFl9bkLrcjRr9H5pXp3mNUg4tp6hZFSn60xvWmQAFrULHW2B2tlcbeLKhYdqY12pkDY1sWUsdaYiteIWtJkPTK6Y5GG1hMN5AmwphE6HIhTNvAOCnUeNL7q8ypM1AYMwRKrneZHT4PwVGnG668uUKSirkrkTI1EPPl8kygjZIL9VD8RLUSFW1T1I1TnaOdZ35g5RgUNYWUBSe0TAkFK4BvcK9hkJ6AG3jGySXlcRNK7WBHNleqyxPNmKtRBVW93jLTZsZE1KOdskl91nPN0xaeALAoQT1s0LU7kLB8boLuBbdBrFzym5U5sikx85ZiGTv8ChTzAUhJZmNQDpTGqqxqQlnYVKqzCq5G9g24InVpHK0oqamMzhWnTqJ6B95m0ZtMvKRBI2c7brBHHletKzHQXlS3U71ja16ElcZqXC144snHYyPGNXpDZLrqi0PSYeOR3ibhM5DWyJzBjFaStjWyNyA5ASXiIcYQFlIcgKQbzDRyHJjEyahRc5KKV7buKi7giwurNLVpZ3dmoKCxYrMU8D4PVGCX6z0s0oliHn+TKz0ECDebcjas7kU1tY+rVxteZAyieplQ2/wFeFtbPrnDCerNcFR3eQ5MdJ+XvUMTS0adIB0DZokinpSfvWDE0aL3vQEc09KGvZ+WcmlT35+55n3jMR7r7tbfLcBWks3vP4lafu9l6dB/nq4FO0RetfTORUcY3IUvuvwHyVyuGPR/qXqc83TF0tmjdFdxHbV+iWKazLuIrWv0Wbhy/bJuzDb7iw3sWcY4O7x0XFVDH6ilIek1mu1Z9gEtOte9RRGlt1hSV/kGUPC70GShnIHYu8Zfn3Dl9R2n3eUR3XjEStaNQFs93gRtMt2epeivJXeg2jVuejMQaFwHEdFjkiDKwhY1KLjqfkzgLbTdObi9p6nKKOU6V4KvWPFCHTHJyUXePuIITazEuOxLtAtDWguTA5simiBjiHYuQHXCiNtFaMIuc3ixir2931MW0mo0XJqMU23oSOzwHghUVjSzza4blzPGa/TWunJUJOlB/o5ksdx3yuvXhcRUOl1qjnjXqX75zfFNm9ZZyxv9voSI+LPCKP2hW6Omvf3xg/WJfh9p1sWl033wX0uNVLjxT7D2xSI67vzLxzM8dX2nWv8A7XyfmR1PtQtmp0l+7/8AoJwy9jhZlv4DpWfZnv33fQ8Ul9pluf7SC7qVP6lep9oVvem0td0Ka9Ei9nDPr3RUNWb33XB6v7ufM+fbR0vtc/vWut4ScfSZn2jCs5/frVZf5nf6tk7Xh+30XXr0offq0457/wBKUI+pSqdJLFC++1Uu6M4y8oHzz1iG2p4Siv8AiJ16WuNR/vV/IKleGHu9o6eYOhprY3dTqP1iZ9b7UrCtCqy7owXrI8YjaqC/Yt99XlFEiwlRWiyw/wBVSq/SSGsrx4vWJ/axZdVKq/kX1Y1fatZ3+xqcYnl0MOxWiy2fxVV+tQcukj/w9m/gv+YayumPj1el9pdjlmcasfCD9JXmnZeldjq5o14p7J3wf/kkjxKXSBvTZ7O/3cl6SB8Xp/rWaC3051YPzlJeRNcl0we8VZ6/PUCmr3FbakV5njuBOkkqL/sqkox10qrUoS7pq6577l3nqfRnCsLTiSjmkqkVKD0xlc34rNpMZfbM4V3H4duMkcJ0p+0SNKTo2SKqzvcXPTG9aVCKzzaz59GbWedYR6RWytL+1tMtP3FJ3Jb40lcu55zbnj8Uz+Xu1otMIL9OcY/5pRj6mbU6RWSOm0U/mT9Dwh19spX/AOS//cxkbW+0/ljFeTJ26x8MPc30psX+Jp8XyF/+isb/ALxT+e48LlbJapvyBHCE+3/tf0Ha8OL3hYbsj/vNH+NFfUkVtoS0V6b15qsX9TwN4UntXyU2vOIpYVnrxH30qP8AKWpThh763GWipF+MXq3ErpXrU/D8z58+Kvs03+6p/RIXxZ3/AHIeCkvSSFSnFHr6Bdmez15DnZt7PAFhyad2Kl3TrL0mTR6TVFt8Kldf8y1KcX294lZ79fkB0NS/qeGLpTUWuf8AGr/zEsemFXtVP49b+YdnF9vc6SaVzHnhcOmdXtVP41bmCXS+q9c331q/85O/Di+3u1xFWgmrpaN54W+k8uynudS0v/2Efx+OnJQ+a0P1kTtY+H7/AN/bvelOCFTeVptOLedJq9PuMOnO852lh2nGSlklenfmnVXqnmNayW6FRY8Wlfpgne4u/jdsZe/23rqvjZAjIUiKaIbeIDThA5Dp5XnlI0b1iqCnctLk1fnV+pHVKpmzHAdILXKVWTqJRnmV97buSuSvveomEfybrpkpMMbx8K8l+1V3zeqHzlfnykX/AKYr0Z3tikavCncJRu/Xj5r6hxvxw4yC6mymwKQ5yX4Pml9Rt1/Z+Zcis6yOODHE6b3fMgNPXdxiF1nw7K5vyBjCz7uKBiy9uIKk5SGykOxpbuMRji93GIKkFIOMJQe75oiUJe2h0ayGMK/cFJ7uKGu/d8yBUnX7ByI09rXEkUk8yk33K8ixBYxcsOHqtFvJTcVKDpyuemElc1uzN595n17r2k282a5LzuIFCWx8GWomO3PKZiah0Fkwk5X5loz6r1qT0Xx/Do23hr2i9XZ2tmdR8Iq5LgYdBTi00nzWw1K9VPdftzGJxiJdMLmOxyyu+6uCG5fcvljyIL96figOp7zCoaqVh2h6GvKPIaqj3cEQqpf7QHPd6FqCpTYwG3rIcfd6DZPd6CkqUuNeNqZmDKZtD8hjl3lSUyWMMaaIlK7ReSOqnpT4MILYMYics/5MTa1+jKiwrvdwOHFEOOvaFKovaJS2lv7vIV+9cUQY+8bj7y0lrCe9cVzLOD7ZKlNSWdaGr1niZznv98Q4y2v34ii3oVmtSkk08zV6LDmcj0et919N98eR0UK+5HLLEhZxgkGV3CM000EzkrfY/wBJ353feddGJn26yJu/Oc5mnbByzsMdgPh8di4G27Lv9RvVXtHJLrrHjG+Hx2LgB4OjsXA3FZHtC7I9pOSfTXHxg/DobFwF8NhsRtOyPcFWVl5J9NMfGG8GQ2L34g+GR2LzNvqrA7O9w5Z9OPHxhvBcdgHgpbPNm51buA7L3F5Z9Tix8YTwWtnqL4XHZ5s3VZ2N6uOWfTiw8YbwZHZ5sHwyOxm51fcNdB7C8s+nDh4xPhq2MTwbHY+JtZF7BuQewcs+pw4eMZ4OjsfEloWJRvuvV6uNVUXsA6Hu4csrHxYx3TMdmfba7rl6IY7O/wDqS4msqHu4b1G/PcI+QnCGUrG+3LiGVkl234tM1IWS7USTpbi8kpxw5/4ctrD8OW828m9wMm9xeWWeHDxifD1tYHg/vNxUr9QpURyycOHjD+H72DqG9m7kfeYbkdxeWThx8YnUt7A7FvZuZJahsqS9scsnDixeovaxOwvazYdFbPMSorZ5jllOHFj9Se1hdkl2mazpL2wZC/8AqXkk4cWV1aXaYurS7RqSs4zJbhyHHDNdnl2gOjLtehoumtg10tyLuccM7IPtBVGW30NDJbh1Oz3vQN044hDYbJOTVzvOvhBJLXvK2DLNirRnLU2ZnK2coDKLcIj96hERqQkxVG2UaeEobJeXMk+Jw2S8uZiYlYygZQexDo07xRwhDWnwXMKwhT2S4LmYnGfHTeDsk9gcjuCsIw2S4LmH4lDsvguZNZN4BUtwHB7GPWEYbHwXMLwnDZLguZNZXeEOT3P34DHT3PyLDwpDZLguYHhSn2ZcFzGs+G8IMnuGuG4tfE6fZfBcxrwlDZLguY1nxd4VnDcRSj+EtvCMNkuC5jfiEOy+C5jWfF3j1Ta/CwSS7Jddvh2XwXMY7dT7L4LmKnxd4UvBiv3Fp26n2XwXMjlbqfZl5cxrPhvCFIJKrbT7L4LmOVrp9mXBcxrKbwZFbi1TpK7WMja6fZfBcyaNvp9l8FzLGMsznCrUgiKUO8uTtlPY+C5kMrXDZLguY1lYzhVlC7aMcN5alaYbJcFzGOtT/FwXMUu8K+LvAollVqeyXlzBlaf4uC5lo3hXuHKF/wDQmy0H2uC5iysPxeXMUm8K8qQ10tpcjWh+LguYMrT2PguYo3VFRA7OXFUp/i4LmJ1Yb+C5lo3Uurr2gOgi7lqeyXBcxSrQ2PguYN1LJL2hjp+7i7laex8FzC61PY+C5hN2diLY+AzJ+7jRdensfBcxvWKex8FzKbwpxh3luzwW8HWqex8FzJFa6d2iXBcy0zOX2tKpctfEhnPv4kbt0NkuC5kE7dHY+CNRDnMwmygip12Ox8FzEapLf//Z" };
const AddStoreDetails = () => {
  return (
    <ImageBackground source={image} resizeMode="cover" style={styles.image}>
      
    <View style={styles.container}>
      <Text style={[styles.text1,styles.bordering]}>Edit Store Details</Text>

   
          <Text style={styles.Headings}>Store name</Text>
          <TextInput
            placeholder="Ali store book"
            style={styles.Textfields}
          ></TextInput>
          <Text style={styles.Headings}>Store email</Text>
          <TextInput
            placeholder="alistore@gmail.com"
            style={styles.Textfields}
          ></TextInput>
          <Text style={styles.Headings}>Store contact number</Text>
          <TextInput
            placeholder="XXXX-XXXXXXX"
            style={styles.Textfields}
          ></TextInput>
          <Text style={styles.Headings}>Store address</Text>
          <TextInput
            placeholder="street no  .."
            style={styles.Textfields}
          ></TextInput>
          
           < Button
                                    
                style={styles.padding1}              
                                >Save</Button>
    </View>
    </ImageBackground>
  )
}

export default AddStoreDetails

const styles = StyleSheet.create({
  bordering:{
    textAlign:"center",
    borderRadius: 20,
    borderColor: "#f87c28",
    borderWidth: 2,
    shadowColor:"black",
    shadowOffset:50,
    padding: 20,
    marginBottom: 20,
      },
  container:{
padding:20
  },
  image: {
    flex: 1,
    justifyContent: "center"
  },
  text1:{
    borderRadius: 10,
    borderColor: "yellow",
    borderWidth: 1,
    padding: 20,
    marginBottom: 20,
    width: 300,
    fontWeight:"bold"

  },
  Textfields: {
    borderRadius: 10,
    borderColor: "grey",
    borderWidth: 1,
    padding: 10,
    marginBottom: 20,
    width: 300,
  },
  padding1:{
    textAlign:"center",
    borderRadius: 20,
    borderColor: "#f87c28",
    borderWidth: 2,
    shadowColor:"black",
    shadowOffset:50,
    padding: 10,
    width:150,
    marginTop:7,
    marginLeft:65
    },
    Headings:{
      textAlign:"center",
      color:"#f87c28"
    }
})