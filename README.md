# Level Generation for Rhythm VR Games

## Background Description
Ragnarock is a virtual reality (VR) rhythm game in which you play a
Viking captain competing in a longship race. With two hammers, the task is to
crush the incoming runes in sync with epic Viking music. The runes are defined
by a beat map which the player can manually create. The creation of beat maps
takes hours.

## Goal of the Work
This work aims to automate the process of beat map creation, also known
as the task of learning to choreograph. The assignment is broken down into
three parts: determining the timing of the beats (action placement), determining
where in space the runes connected with the chosen beats should be placed
(action selection) and web-application creation.

## Action Placement
For the first task of action placement, extraction of predominant local
pulse (PLP) information from music recordings is used. This approach allows to
learn where and how many beats are supposed to be placed.

## Action Selection
For the second task of action selection, Recurrent Neural Networks
(RNN)[10][11] are used, specifically Gated recurrent unit (GRU)[12][13] to
learn sequences of beats, and their patterns to be able to recreate those rules and
receive completely new levels.

## Final Solution
Then the last task was to build a solution for non-technical players, the
task was to combine the results of the first and the second parts into a web
application for easy use. For this task the frontend was built using JavaScript
and React and the backend - python and FastAPI.
