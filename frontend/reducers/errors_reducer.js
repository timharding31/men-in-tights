import { combineReducers } from 'redux';
import LoginErrorsReducer from './errors/login_errors_reducer';
import WatchlistErrorsReducer from './errors/watchlist_errors_reducer';
import PortfolioErrorsReducer from './errors/portfolio_errors_reducer';
import StockErrorsReducer from './errors/stock_errors_reducer';

export default combineReducers({
  login: LoginErrorsReducer,
  watchlist: WatchlistErrorsReducer,
  portfolio: PortfolioErrorsReducer,
  stocks: StockErrorsReducer,
});