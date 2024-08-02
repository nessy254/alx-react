import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
import Footer from './Footer/Footer';
import Header from './Header/Header';
import Login from './Login/Login';
import Notifications from './Notifications/Notifications';
import CourseList from './CourseList/CourseList';

describe('<App />', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.exists()).toBe(true);
  });

  it('should render Notifications component', () => {
    const component = shallow(<App />);
    expect(component.find(Notifications).length).toBe(1);
  });

  it('should render Header component', () => {
    const component = shallow(<App />);
    expect(component.find(Header).length).toBe(1);
  });

  it('should render Login component when logged out', () => {
    const component = shallow(<App isLoggedIn={false} />);
    expect(component.find(Login).length).toBe(1);
  });

  it('should render Footer component', () => {
    const component = shallow(<App />);
    expect(component.find(Footer).length).toBe(1);
  });

  it('does not render CourseList if logged out', () => {
    const component = shallow(<App isLoggedIn={false} />);
    expect(component.find(CourseList).length).toBe(0);
    expect(component.find(Login).length).toBe(1);
  });

  it('renders CourseList if logged in', () => {
    const component = shallow(<App isLoggedIn={true} />);
    expect(component.find(CourseList).length).toBe(1);
    expect(component.find(Login).length).toBe(0);
  });
});





// import React from 'react';
// import { shallow } from 'enzyme';

// import App from './App';
// import Footer from './Footer/Footer';
// import Header from './Header/Header';
// import Login from './Login/Login';
// import Notifications from './Notifications/Notifications';
// import CourseList from "./CourseList/CourseList";

// describe('<App />', () => {
//   it('renders without crashing', () => {
//     const wrapper = shallow(<App />);
//     expect(wrapper.exists()).toBe(true);
//   });

//   it("should render Notifications component", () => {
//     const component = shallow(<App />);

//     expect(component.contains(<Notifications />)).toBe(true);
//   });

//   it("should render Header component", () => {
//     const component = shallow(<App />);

//     expect(component.contains(<Header />)).toBe(true);
//   });
//   it("should render Login Component", () => {
//     const component = shallow(<App />);

//     expect(component.contains(<Login />)).toBe(true);
//   });
//   it("should render Footer component", () => {
//     const component = shallow(<App />);

//     expect(component.contains(<Footer />)).toBe(true);
//   });

//   it("does not render courselist if logged out", () => {
//     const component = shallow(<App />);

//     component.setProps({ isLoggedIn: false });

//     expect(component.contains(<CourseList />)).toBe(true);
//   });
//   it("renders courselist if logged in", () => {
//     const component = shallow(<App isLoggedIn={true} />);

//     expect(component.contains(<CourseList />)).toBe(true);
//     expect(component.contains(<Login />)).toBe(false);
//   });

// });