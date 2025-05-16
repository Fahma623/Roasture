import * as poseDetection from '@tensorflow-models/pose-detection'
import * as tf from '@tensorflow/tfjs'

export async function analyzePose(imageElement: HTMLImageElement): Promise<string> {
  await tf.setBackend('webgl')
  await tf.ready()

  const detector = await poseDetection.createDetector(poseDetection.SupportedModels.MoveNet, {
    modelType: poseDetection.movenet.modelType.SINGLEPOSE_LIGHTNING,
  })

  const poses = await detector.estimatePoses(imageElement)

  if (poses.length > 0) {
    const keypoints = poses[0].keypoints

    const leftShoulder = keypoints.find(kp => kp.name === 'left_shoulder')?.y || 0
    const rightShoulder = keypoints.find(kp => kp.name === 'right_shoulder')?.y || 0

    const diff = Math.abs(leftShoulder - rightShoulder)

    if (diff > 20) {
      return "🔥 Roast Report\nBro your shoulders are slanted like the Leaning Tower of Pisa 💀"
    } else {
      return "Not bad! Your spine might just forgive you today 😎"
    }
  }

  return '🔥 Roast Report\nNo human detected. Are you a ghost or just blending in with your chair? 👻'
}
