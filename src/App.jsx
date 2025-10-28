import "@radix-ui/themes/styles.css";
import './App.css'

function App() {
 

  return (
    <>
     <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about_us" element={<AboutUs />} />
            <Route path="sing_up" element={<SingUp />} />
            <Route path="log_in" element={<LogIn />} />
            <Route path="forgot" element={<Forgot />} />


          </Route>
        </Routes>
      </BrowserRouter>
    </>
    </>
  )
}

export default App
