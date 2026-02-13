# 3D Models Folder

## 📦 Put Your Blender Models Here

Place your exported Blender files (.glb or .gltf) in this folder.

### Example:
```
models/
├── robot.glb
├── spaceship.glb
├── planet.glb
└── README.md (this file)
```

---

## 🎨 How to Export from Blender

1. Open your model in **Blender**
2. **File** → **Export** → **glTF 2.0 (.glb/.gltf)**
3. Choose **glTF Binary (.glb)** format (recommended)
4. Save the file here in this `models` folder

---

## ⚙️ How to Use Your Models

After placing your .glb files here, edit:
**`frontend/src/components/Scene3D.jsx`**

Find this section (around line 64):
```javascript
const [models, setModels] = useState([
  // Add your models here!
  {
    path: '/models/your-model.glb',  // ← Your model filename
    position: [0, 0, 0],              // [x, y, z] position
    scale: 1,                         // Size multiplier
    rotationSpeed: 0.2                // Rotation speed
  }
]);
```

### Example with your models:
```javascript
const [models, setModels] = useState([
  {
    path: '/models/robot.glb',
    position: [-3, 1, 0],
    scale: 1.5,
    rotationSpeed: 0.3
  },
  {
    path: '/models/spaceship.glb',
    position: [3, -1, 2],
    scale: 2,
    rotationSpeed: 0.1
  }
]);
```

---

## 📐 Position Guide

**Position [x, y, z]:**
- **x**: Left (negative) ← → Right (positive)
- **y**: Down (negative) ← → Up (positive)
- **z**: Back (negative) ← → Front (positive)

**Examples:**
- `[-5, 0, 0]` = Far left
- `[0, 3, 0]` = High up center
- `[0, 0, -10]` = Far back (background)

**Scale:**
- `0.5` = Half size
- `1` = Original size
- `2` = Double size

**Rotation Speed:**
- `0.05` = Very slow
- `0.2` = Normal
- `0.5` = Fast

---

## ✅ Your models will:
- Follow mouse movement
- Rotate as you scroll
- Scale up on hover
- Look amazing!

**Just drop your .glb files here and configure Scene3D.jsx!**
