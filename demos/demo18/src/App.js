import React from 'react';
import logo from './logo.svg';
import './App.css';
import axios from "axios";
import qs from 'qs';

class App extends React.Component {

      constructor(props) {
        super(props);
        this.state = { info: "Lifecycle" };
        this.changeState = this.changeState.bind(this);
    }
  
      changeState() {
        this.setState({ info: "Lifecycle" + new Date().toLocaleTimeString() });
    }
  
                
      componentDidMount() {
      
            //----------------------------------------------------------------------------------------
            //Axios 实例，创建一个实例
            const instance = axios.create({
              baseURL: 'https://some-domain.com/api/',
              timeout: 1000,
              headers: {'X-Custom-Header': 'foobar'}
            });
            
              // Add a request interceptor
            const myInterceptor = instance.interceptors.request.use(function (config) {
                // Do something before request is sent
                return config;
              }, function (error) {
                // Do something with request error
                return Promise.reject(error);
              });

            // Add a response interceptor
            const myInterceptor2 = instance.interceptors.response.use(function (response) {
                // Any status code that lie within the range of 2xx cause this function to trigger
                // Do something with response data
                return response;
              }, function (error) {
                // Any status codes that falls outside the range of 2xx cause this function to trigger
                // Do something with response error
                return Promise.reject(error);
              });

            instance.interceptors.request.eject(myInterceptor);
            instance.interceptors.request.eject(myInterceptor2);
            
            instance.get('/user/12345')
                  .then(function (response) {
                      console.log(response.data);
                      console.log(response.status);
                      console.log(response.statusText);
                      console.log(response.headers);
                      console.log(response.config);
              });

            instance.post('/user/12345', {
              name: 'new name'
            }).then(function (response) {
                      console.log(response.data);
                      console.log(response.status);
                      console.log(response.statusText);
                      console.log(response.headers);
                      console.log(response.config);
              });
            
            //----------------------------------------------------------------------------------------
            //GET/POST请求，创建一个新实例。错误处理
            const instance3 =axios({
              method: 'get',
              url: 'http://bit.ly/2mTM3nY',
              responseType: 'stream'
            })
              .then(function (response) {
                response.data.pipe(fs.createWriteStream('ada_lovelace.jpg'))
                      console.log(response.data);
                      console.log(response.status);
                      console.log(response.statusText);
                      console.log(response.headers);
                      console.log(response.config);
              })
                  .catch(function (error) {
                if (error.response) {
                  // The request was made and the server responded with a status code
                  // that falls out of the range of 2xx
                  console.log(error.response.data);
                  console.log(error.response.status);
                  console.log(error.response.headers);
                } else if (error.request) {
                  // The request was made but no response was received
                  // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
                  // http.ClientRequest in node.js
                  console.log(error.request);
                } else {
                  // Something happened in setting up the request that triggered an Error
                  console.log('Error', error.message);
                }
                console.log(error.config);
              });
            
              const instance4 =axios({
              method: 'post',
              url: '/user/12345',
              data: {
                firstName: 'Fred',
                lastName: 'Flintstone'
              }
            }).then(function (response) {
                response.data.pipe(fs.createWriteStream('ada_lovelace.jpg'))
              });
            
            //----------------------------------------------------------------------------
            //使用 cancel token 取消一个请求。
            
            const instance2 = axios.create({
              baseURL: 'https://some-domain.com/api/',
              timeout: 1000,
              headers: {'X-Custom-Header': 'foobar'}
            });
            
            const CancelToken = axios.CancelToken;
            const source = CancelToken.source();

            instance2.get('/user/12345', {
              cancelToken: source.token
            }).catch(function (thrown) {
              if (instance2.isCancel(thrown)) {
                console.log('Request canceled', thrown.message);
              } else {
                // handle error
              }
            });

            instance2.post('/user/12345', {
              name: 'new name'
            }, {
              cancelToken: source.token
            })

            // cancel the request (the message parameter is optional)
            source.cancel('Operation canceled by the user.');

            //----------------------------------------------------------------------------
            
              const instance3 = axios.create({
              baseURL: 'https://some-domain.com/api/',
              timeout: 1000,
              headers: {'X-Custom-Header': 'foobar'}
            });
            
            //请求体编码,默认情况下，axios将 JavaScript 对象序列化为 JSON 。 要以application/x-www-form-urlencoded格式发送数据，您可以使用以下选项之一。
            const data = { 'bar': 123 };
            const options = {
              method: 'POST',
              headers: { 'content-type': 'application/x-www-form-urlencoded' },
              data: qs.stringify(data),
              url,
            };
            instance3.get(options);
            

}


     render() {
      return (
        <div className="App">
            {this.state.info}
        </div>
      );
     }
}

export default App;
