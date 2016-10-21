import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { DoAppComponent } from '../app/do.component';

beforeEachProviders(() => [DoAppComponent]);

describe('App: Do', () => {
  it('should create the app',
      inject([DoAppComponent], (app: DoAppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'do works!\'',
      inject([DoAppComponent], (app: DoAppComponent) => {
    expect(app.title).toEqual('do works!');
  }));
});
