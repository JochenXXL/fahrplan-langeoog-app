package com.fahrplanlangeoog;

import android.os.Bundle;
import com.reactnativenavigation.controllers.SplashActivity;
import org.devio.rn.splashscreen.SplashScreen;

public class MainActivity extends SplashActivity {
  @Override
  protected void onCreate(Bundle savedInstanceState) {
      SplashScreen.show(this);  // here
      super.onCreate(savedInstanceState);
  }
}
