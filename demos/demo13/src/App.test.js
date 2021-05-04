import { render, screen } from '@testing-library/react';
import App from './App';

//https://jestjs.io/zh-Hans/docs/getting-started

test('renders learn react link', () => {
  render(<App />);
  const element = screen.getByText('测试react组件的方法分两类：');
  expect(element).toBeInTheDocument();
});

