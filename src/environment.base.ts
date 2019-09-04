import { Version } from '@angular/core';

// This file contains the constants that all of the environments
// that the app defines.

/** Firebase app configuration */
export interface FirebaseAppConfig {
  apiKey?: string;
  authDomain?: string;
  databaseURL?: string;
  projectId?: string;
  storageBucket?: string;
  messagingSenderId?: string;
}
/** Environment interface */
export interface Environment {
  production: boolean;
  swLocation: string;
  firebaseConfig?: FirebaseAppConfig;
  latestVersion: Version;
}

/** The latest version of the app. */
export const latestVersion = new Version('1.5.0');
/** The Firebase configuration. */
export const firebaseConfig: FirebaseAppConfig = {
  apiKey: 'AIzaSyB70FnAVNaxg33vyY4tlPKZ5x00QY80mTc',
  authDomain: 'rss-reader-a5b4b.firebaseapp.com',
  databaseURL: 'https://rss-reader-a5b4b.firebaseio.com',
  projectId: 'rss-reader-a5b4b',
  storageBucket: '',
  messagingSenderId: '870397667989'
};
/** Default environment that other enviroments can extend from. */
export const defaultEnvironment: Environment = {
  production: false,
  swLocation: '',
  latestVersion
};

/**
 * Merges the specified environment with the default environment
 * and returns the result.
 * @param env The enviroment to merge
 */
export function mergeWithDefaultEnv(env: Partial<Environment>): Environment {
  return { ...defaultEnvironment, ...env };
}
