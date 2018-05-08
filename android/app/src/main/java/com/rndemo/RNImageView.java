package com.rndemo;

import android.widget.ImageView;

import com.facebook.react.uimanager.SimpleViewManager;
import com.facebook.react.uimanager.ThemedReactContext;

/**
 * Created by merbng on 2018/5/7.
 */

public class RNImageView extends SimpleViewManager<ImageView> {
    @Override
    public String getName() {
        return "CustomImageView";
    }

    @Override
    protected ImageView createViewInstance(ThemedReactContext reactContext) {
        ImageView imageView = new ImageView(reactContext);
        imageView.setImageResource(R.mipmap.ic_launcher);
        return imageView;
    }
}
