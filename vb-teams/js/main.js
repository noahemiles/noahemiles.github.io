angular.module('vb-teams', [])
    .controller('MainCtrl', ($scope) => {
        $scope.players = [];
        $scope.teams = [];
        $scope.newPlayer = null;

        $scope.isCreating = false;
        $scope.isEditing = false;
        $scope.isEditingTeam = false;
        $scope.currentTeam = null;

        const store = JSON.parse(localStorage.getItem('vbTeams'));
        if (store) {
            $scope.players = store.players;
            $scope.teams = store.teams;
        }
        setInterval(updateStorage, 1000);

        function updateStorage() {
            const vbTeams = { "players": $scope.players, "teams": $scope.teams };
            localStorage.setItem("vbTeams", JSON.stringify(vbTeams));
        }
        $scope.isCurrentTeam = function isCurrentTeam(team) {
            return $scope.currentTeam !== null && team === $scope.currentTeam;
        };

        $scope.setCurrentTeam = function setCurrentTeam(team) {
            $scope.currentTeam = team;

            $scope.cancel();
        };

        $scope.setEditedPlayer = function setEditedPlayer(player) {
            $scope.editedPlayer = angular.copy(player);
        };

        $scope.setEditedTeam = function setEditedTeam(team) {
            $scope.oldTeam = team;
        };

        $scope.isSelectedPlayer = function isSelectedPlayer(player) {
            return $scope.editedPlayer !== null && $scope.editedPlayer && $scope.editedPlayer.id === player.id;
        };

        function resetNewPlayerForm() {
            $scope.newPlayer = {
                name: "",
                gender: "",
                tall: "",
                displayName: ""
            };
        }

        //crud

        $scope.addTeam = function addTeam(team) {
            $scope.teams.push(team);
        };

        $scope.createPlayer = function createPlayer(player) {
            if (!player.name) return;
            if (!player.tall) {
                player.tall = false;
            }
            if (!player.gender) {
                player.gender = "n/a"
            }
            player.displayName = player.name;
            player.team = $scope.currentTeam;
            player.id = uid();
            $scope.players.push(player);
            resetNewPlayerForm();
        };
        const uid = function () {
            return Date.now().toString(36) + Math.random().toString(36).substr(2);
        };

        function findPlayerIndex(id) {
            let foundIndex = -1;
            for (const [index, search] of $scope.players.entries()) {
                if (search.id === id) {
                    foundIndex = index;
                    break;
                }
            }
            return foundIndex;
        }

        $scope.updatePlayer = function updatePlayer(player) {
            const index = findPlayerIndex(player.id);
            if (index > -1) {
                $scope.players[index] = player;
                $scope.editedPlayer = null;
                $scope.isEditing = false;
            }
        };

        $scope.updateTeam = function updateTeam(team) {
            const index = $scope.teams.indexOf($scope.oldTeam);
            if (index > -1) {
                $scope.players.forEach(player => {
                    if (player.team == $scope.oldTeam) {
                        player.team = team;
                    }
                });
                $scope.teams[index] = team;
                $scope.editedTeam = null;
                $scope.isEditingTeam = false;
                $scope.setCurrentTeam(team);
            }
        };

        $scope.deletePlayer = function deletePlayer(player) {
            const index = findPlayerIndex(player.id);
            if (index > -1) {
                $scope.players.splice(index, 1);
            }
        };

        // creating and editing

        $scope.shouldShowCreating = function shouldShowCreating() {
            return $scope.currentTeam && !$scope.isEditing;
        };

        $scope.shouldShowEditing = function shouldShowEditing() {
            return $scope.isEditing && !$scope.isCreating && !$scope.isEditingTeam;
        };

        $scope.shouldShowEditingTeam = function shouldShowEditingTeam() {
            return $scope.isEditingTeam && !$scope.isCreating && !$scope.isEditing;
        };

        $scope.startCreating = function startCreating() {
            $scope.isCreating = true;
            $scope.isEditing = false;
            resetNewPlayerForm();
        };

        $scope.startEditingTeam = function startEditingTeam() {
            $scope.isEditingTeam = true;
            $scope.isCreating = false;
            $scope.isEditing = false;
        };

        $scope.startEditing = function startEditing() {
            $scope.isCreating = false;
            $scope.isEditing = true;
            $scope.isEditingTeam = false;
        };

        $scope.cancel = function cancel() {
            $scope.isEditing = false;
            $scope.isCreating = false;
            $scope.isEditingTeam = false;
            $scope.editedPlayer = null;
        };
    })

    ;