import dva from 'dva';
import './index.css';
import 'antd-mobile/dist/antd-mobile.css';
// 1. Initialize
const app = dva();

// 2. Plugins
// app.use({});

// 3. Model
app.model(require('./models/home').default);

//登录
app.model(require('./models/login').default);

//搜索
app.model(require('./models/search').default);

// 4. Router
app.router(require('./routes/index').default);

// 5. Start
app.start('#root');
