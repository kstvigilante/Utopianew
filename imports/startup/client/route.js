import { FlowRouter } from 'meteor/kadira:flow-router';
import { BlazeLayout } from 'meteor/kadira:blaze-layout';
import "../../ui/pages/main/utopiaHome.js";

FlowRouter.route('/', {
    name: 'utopiaHome',
    action() {
      BlazeLayout.render('App_body', { main: 'utopiaHome' });
    },
  });
FlowRouter.route('/utopia_os', {
    name: 'Utopia_Operating_System',
    action() {
      BlazeLayout.render('App_body', { main: 'Utopia_Operating_System' });
    },
  });
  FlowRouter.route('/Involved', {
    name: 'Involved',
    action() {
      BlazeLayout.render('App_body', { main: 'Involved' });
    },
  });
  FlowRouter.route('/location', {
    name: 'Involved',
    action() {
      BlazeLayout.render('App_body', { main: 'Involved' });
    },
  });
  FlowRouter.route('/consti', {
    name: 'Involved',
    action() {
      BlazeLayout.render('App_body', { main: 'Involved' });
    },
  });
  FlowRouter.route('/shop', {
    name: 'Involved',
    action() {
      BlazeLayout.render('App_body', { main: 'Involved' });
    },
  });
  FlowRouter.route('/contact', {
    name: 'Involved',
    action() {
      BlazeLayout.render('App_body', { main: 'Involved' });
    },
  });
  