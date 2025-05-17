# Roasture

![Image](https://github.com/user-attachments/assets/ef36262f-0006-4d28-924f-a481c2b6c8eb)

**Roasture** is a posture analysis web application that combines AI-based pose estimation with fun, meme-style feedback. Built using TensorFlow.js and MoveNet, it detects key body joints from an uploaded image and generates casual roast-style posture critiques.

## 📸 What It Does

- Users upload a photo showing their posture (e.g., sitting at a desk or using a phone).
- The app runs pose detection directly in the browser using TensorFlow.js and the MoveNet model.
- It analyzes key points like shoulder alignment, back curvature, and head tilt.
- Based on simple heuristics, it generates a humorous or sassy comment.
- No image uploads to the cloud — all processing is done locally for privacy and speed.

---

## 🔧 Tech Stack

| Layer      | Tools/Libs                                      |
| ---------- | ----------------------------------------------- |
| Frontend   | Next.js 15 (App Router) + Tailwind CSS          |
| AI/ML      | TensorFlow.js + MoveNet Lightning (single pose) |
| Deployment | Vercel                                          |
| Styling    | Custom Tailwind styles with blurred meme image  |
| Language   | TypeScript                                      |

---

## 🧠 Technical Workflow

1. **Image Upload**  
   User selects a local image. This image is rendered in the browser via `<img>`.

2. **Pose Estimation**  
   On "Analyze" click, TensorFlow.js loads the MoveNet model (`SinglePose.Lightning`) and estimates the posture based on keypoints like:

   - Shoulders
   - Spine (approximated)
   - Head/neck tilt

3. **Posture Evaluation Logic**  
   Using distances and angles between keypoints, we apply basic heuristics like:
   - Are the shoulders level?
   - Is the head tilted forward?
   - Is the spine curved?
4. **Fun Feedback Generator**  
   Based on the above logic, the app selects a randomized roast or praise message for the user.

5. **Client-Side Execution**  
   All analysis is done **client-side** using TensorFlow.js in the browser. No data is stored or transmitted externally.

---

## 🚀 Live Demo

🔗[https://roasture-ruxm.vercel.app](https://roasture-ruxm.vercel.app)

---

## 🛠️ Run Locally

```bash
git clone https://github.com/Fahma623/Roasture.git
cd Roasture
npm install
npm run dev
```
