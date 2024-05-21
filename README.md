<script src="https://aframe.io/releases/0.9.2/aframe.min.js"></script>
<script src="https://cdn.rawgit.com/jeromeetienne/AR.js/1.7.5/aframe/build/aframe-ar.js"></script>

<body style='margin : 0px; overflow: hidden;'>
  <a-scene embedded arjs='sourceType: webcam; debugUIEnabled: false;'>
    <a-marker type='pattern' url='assets/pattern-test.patt'>
      <a-entity position='0 -6 -12' rotation="-20 0 0" gltf-model="url(assets/Cutest_penguin_astr.glb)"></a-entity>
    </a-marker>
  </a-scene>
</body>
